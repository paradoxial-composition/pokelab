 import * as type from '../types';
 export const  getPokemons = () => ({type: type.GET_POKEMONS_REQUESTED})

 export const getPokemonsSuccess = (pokemons) => ({type: type.GET_POKEMONS_SUCCESS, payload: pokemons});
 export const getPokemonCardInfoSuccess = (pokemons) => ({type: type.GET_POKEMON_CARD_INFO_SUCCESS, payload: pokemons});
 
 export const getPokemonsFailure = (errorMessage) => ({type: type.GET_POKEMONS_FAILED, payload: errorMessage})