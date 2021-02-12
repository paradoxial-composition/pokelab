import {call, put, takeEvery} from 'redux-saga/effects'
import axios from 'axios';
import Api from '../../api';

function* fetchPokemons (action) {
  try{
    const pokemons = yield call(Api.getPokemons);
    yield put({type: 'GET_POKEMONS_SUCCESS', pokemons: pokemons.results})
  } catch (e) {
    yield put({type: 'GET_POKEMONS-FAILED', message: e.message})
  }
}

function* pokemonSaga() {
  yield takeEvery('GET_POKEMONS_REQUESTED', fetchPokemons)
}

export default pokemonSaga;