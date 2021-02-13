import {call, put, takeLatest} from 'redux-saga/effects'
import Api from '../../api';
import { getPokemonsSuccess, getPokemonsFailure } from '../actions/pokemons';

function* fetchPokemons () {
  try{
    const pokemons = yield call(Api.getPokemons);
    yield put(getPokemonsSuccess(pokemons.results))
  } catch (e) {
    yield put(getPokemonsFailure(e.message))
  }
}

function* pokemonWatcher() {
  yield takeLatest('GET_POKEMONS_REQUESTED', fetchPokemons)
}

export default pokemonWatcher;