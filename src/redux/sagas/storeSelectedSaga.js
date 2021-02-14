import {put, takeLatest} from 'redux-saga/effects'
import * as type from '../types';
import Api from '../../api';
import {  
    storeSelectedPokemon,
    getPokemonsFailure
} from '../actions/pokemons';

function* storePokemon (action) {
  try{
    yield put(storeSelectedPokemon(action.payload)) // store selected pokemon in store

  } catch (e) {
    yield put(getPokemonsFailure(e.message))
  }
}
function* storePokemonWatcher() {
  yield takeLatest(type.PUT_SELECTED_POKEMON, storePokemon)
}

export default storePokemonWatcher;