 import * as type from '../types';
 export const  getPokemons = (options) => ({type: type.GET_POKEMONS_REQUESTED, payload: options})

 export const getTypesSuccess = (types) => ({type: type.GET_TYPES_SUCCESS, payload: types});
 export const getPokemonCardInfoSuccess = (pokemons) => ({type: type.GET_POKEMON_CARD_INFO_SUCCESS, payload: pokemons});
 
 export const getPokemonsFailure = (errorMessage) => ({type: type.GET_POKEMONS_FAILED, payload: errorMessage})

 export const clearPokemons = () => ({type: type.CLEAR_POKEMONS});
 