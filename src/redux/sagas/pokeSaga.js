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
    // Depending on need expressed by the parametre passed we might chose weather to fetch all pokemons
    // or just ones that are of some type, a type in which url is specified in the filterUrl parameter
    // Becase both api calls have the same result and will follow the same process

    if(action.payload.offset != undefined) {
      pokemons = yield call(Api.getPokemons, action.payload.offset)
      if (action.payload.withClear) {
        yield put(clearPokemons()) // refresh the pokeCardInfoArray
      }
      pokeCardData= yield all(pokemons.results.map( poke => call(Api.getPokemonCardData, poke.name)));

      types = yield call(Api.getTypes)
    }

    if(action.payload.filterUrl) {
      pokemons = yield call(Api.getFilteredByType, action.payload.filterUrl)
      const filteredPokemons = pokemons.pokemon.slice(0, 20).map( pokemon => pokemon.pokemon)
      yield put(clearPokemons()) // refresh the pokeCardInfoArray
      pokeCardData = yield all(filteredPokemons.map( poke => call(Api.getPokemonCardData, poke.name)));
      
    }
    
    yield put(getPokemonCardInfoSuccess(pokeCardData))
    yield put(getTypesSuccess(types.results))   
    
  } catch (e) {
    yield put(getPokemonsFailure(e.message))
  }
}
function* pokemonWatcher() {
  yield takeEvery(type.GET_POKEMONS_REQUESTED, fetchPokemons)
}

export default pokemonWatcher;