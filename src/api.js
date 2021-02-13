const apiUrl = 'https://pokeapi.co/api/v2/'

export default {
    getPokemons(pokeCount){
        return fetch(apiUrl + 'pokemon?offset='+ pokeCount +'&limit=10', {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
              }
          }).then(response => response.json())
            .catch((error) => {throw error})
    },
    getTypes(){
        return fetch(apiUrl + 'type/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => response.json())
            .catch((error) => {throw error})
    },
    getPokemonCardData(name){
        return fetch(apiUrl + 'pokemon/' + name, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => response.json())
            .catch((error) => {throw error})
    },
    getFilteredByType(url){
        return fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => response.json())
            .catch((error) => {throw error})
    }
}