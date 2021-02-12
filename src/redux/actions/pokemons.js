 import * as type from '../types';

 export function getPokemons(pokemons) {
     return {
        type: type.GET_POKEMONS_REQUESTED,
        payload: pokemons
    }
 }