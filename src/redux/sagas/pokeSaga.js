import {call, all,put, takeEvery} from 'redux-saga/effects'
import * as type from '../types';
import Api from '../../api';
import { getPokemonsSuccess, getPokemonsFailure, getPokemonCardInfoSuccess } from '../actions/pokemons';

function* fetchPokemons () {
  try{
    const pokemons = yield call(Api.getPokemons)
    yield put(getPokemonsSuccess(pokemons.results))

    const pokeCardData = yield all(pokemons.results.map( poke => call(Api.getPokemonCardData, poke.name)));
    yield put(getPokemonCardInfoSuccess(pokeCardData))
    
  } catch (e) {
    yield put(getPokemonsFailure(e.message))
  }
}
function* pokemonWatcher() {
  yield takeEvery(type.GET_POKEMONS_REQUESTED, fetchPokemons)
}

export default pokemonWatcher;