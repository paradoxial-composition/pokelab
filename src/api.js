const apiUrl = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10';

export default {
    getPokemons(){
        return fetch(apiUrl, {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
              }
          }).then(response => response.json())
            .catch((error) => {throw error})
  }
}