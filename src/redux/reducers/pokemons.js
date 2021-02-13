import * as type from '../types';

const initialState = {
  pokemons: [],
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
        loading: false,
        pokemons: action.payload
      }
      case type.GET_POKEMONS_FAILED:
      return {
        ...state,
        
        loading: false,
        error: action.message
      }
    default: return state;
  }
}