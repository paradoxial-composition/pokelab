const apiUrl = 'https://pokeapi.co/api/v2/'

export default {
    getPokemons(){
        return fetch(apiUrl + 'pokemon?offset=0&limit=10', {
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
}
}