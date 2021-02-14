import {call, all,put, takeEvery} from 'redux-saga/effects'
import * as type from '../types';
import Api from '../../api';
import {  
  getPokemonsFailure, 
  getPokemonCardInfoSuccess,
  clearPokemons
} from '../actions/pokemons';

function* fetchFiltered (action) {
  try{
    // get all pokemons  of one type
    const pokemonsInType = yield call(Api.getFilteredByType, action.payload)
    const filteredPokemons = pokemonsInType.pokemon.slice(0, 20).map( item => item.pokemon)

    yield put(clearPokemons()) // refresh the pokeCardInfoArray

    // get each pokemon's data
    const pokeData = yield all(filteredPokemons.map( item => call(Api.getPokemonData, item.name)));
    yield put(getPokemonCardInfoSuccess(pokeData))
    
  } catch (e) {
    yield put(getPokemonsFailure(e.message))
  }
}
function* pokemonWatcher() {
  yield takeEvery(type.GET_FILTERED_POKEMONS_REQUESTED, fetchFiltered)
}

export default pokemonWatcher;