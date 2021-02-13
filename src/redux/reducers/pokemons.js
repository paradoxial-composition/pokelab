import * as type from '../types';

const initialState = {
  pokemons: [],
  types: [],
  pokemonCardInfo: [],
  loading: false,
  error: null
}

export default function pokemons(state = initialState, action){
  switch(action.type) {
    case type.GET_POKEMONS_REQUESTED:
      return {
        ...state,
        loading: true
      }
    case type.GET_POKEMONS_SUCCESS:
      return {
        ...state,
        pokemons: action.payload
      }
    case type.GET_TYPES_SUCCESS:
      console.log(state.pokemons)
      return {
        ...state,
        types: action.payload
      }
    case type.GET_POKEMON_CARD_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        pokemonCardInfo:[...state.pokemonCardInfo, ...action.payload] 
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
        pokemons: []
      }
    default: return state;
  }
}