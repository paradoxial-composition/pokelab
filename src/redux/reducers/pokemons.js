import * as type from '../types';

const initialState = {
  types: [],
  pokemonCardInfo: [],
  loading: true,
  error: null
}

export default function pokemons(state = initialState, action){
  switch(action.type) {
    case type.GET_POKEMONS_REQUESTED:
      return {
        ...state,
        loading: true
      }
    case type.GET_FILTERED_POKEMONS_REQUESTED:
      return {
        ...state,
        loading: true
      }
    case type.GET_TYPES_SUCCESS:
      return {
        ...state,
        types: action.payload
      }
    case type.GET_POKEMON_CARD_INFO_SUCCESS:
      return {
        ...state,
        pokemonCardInfo:[...state.pokemonCardInfo, ...action.payload] ,
        loading: false
      }
    case type.GET_POKEMONS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message
      }
    case type.CLEAR_POKEMONS:
      return {
        ...state,
        pokemonCardInfo: []
      }
    default: return state;
  }
}