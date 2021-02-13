import {call, all,put, takeEvery} from 'redux-saga/effects'
import * as type from '../types';
import Api from '../../api';
import { 
  getPokemonsSuccess, 
  getPokemonsFailure, 
  getPokemonCardInfoSuccess,
  getTypesSuccess,
  clearPokemons
} from '../actions/pokemons';

function* fetchPokemons (action) {
  
  let pokemons
  let types
  try{
    // Depending on need expressed by the parametre passed we might chose weather to fetch all pokemons
    // or just ones that are of some type, a type in which url is specified in the filterUrl parameter
    // Becase both api calls have the same result and will follow the same process

    if(action.payload.size != undefined) {
      pokemons = yield call(Api.getPokemons, action.payload.size)
      yield put(getPokemonsSuccess(pokemons.results))
      const pokeCardData = yield all(pokemons.results.map( poke => call(Api.getPokemonCardData, poke.name)));
      yield put(getPokemonCardInfoSuccess(pokeCardData))

      types = yield call(Api.getTypes)
    }

    if(action.payload.filterUrl) {
      let filteredPokemons = []
      pokemons = yield call(Api.getFilteredByType, action.payload.filterUrl)

      // This api is realy ... something
      Object.keys(pokemons.pokemon).forEach( key => {
        if(key < 70) {
          filteredPokemons.push(pokemons.pokemon[key].pokemon)
        }
      })
      
      yield put(clearPokemons())
      yield put(getPokemonsSuccess(filteredPokemons))
      const pokeCardData = yield all(filteredPokemons.map( poke => call(Api.getPokemonCardData, poke.name)));
      yield put(getPokemonCardInfoSuccess(pokeCardData))

    }

    yield put(getTypesSuccess(types.results))   
    
  } catch (e) {
    yield put(getPokemonsFailure(e.message))
  }
}
function* pokemonWatcher() {
  yield takeEvery(type.GET_POKEMONS_REQUESTED, fetchPokemons)
}

export default pokemonWatcher;