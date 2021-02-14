import {call, all,put, takeEvery} from 'redux-saga/effects'
import * as type from '../types';
import Api from '../../api';
import {  
  getPokemonsFailure, 
  getPokemonCardInfoSuccess,
  getTypesSuccess,
  clearPokemons
} from '../actions/pokemons';

function* fetchPokemons (action) {
  
  let pokeCardData
  let pokemons
  let types
  try{ 
    // get first pokemon's data (name and url)
    pokemons = yield call(Api.getPokemons, action.payload.offset)

    if (action.payload.withClear) { // clear if need to display all after filtering
      yield put(clearPokemons())
    }
    // get each pokemon's data (atributes, type, sprites etc ..), and then storing them in the state
    pokeCardData= yield all(pokemons.results.map( poke => call(Api.getPokemonData, poke.name)));
    yield put(getPokemonCardInfoSuccess(pokeCardData))

    // get pokemon types to fill filter's options, and then storing them in the state
    types = yield call(Api.getTypes)
    yield put(getTypesSuccess(types.results))   
    
  } catch (e) {
    yield put(getPokemonsFailure(e.message))
  }
}
function* pokemonWatcher() {
  yield takeEvery(type.GET_POKEMONS_REQUESTED, fetchPokemons)
}

export default pokemonWatcher;