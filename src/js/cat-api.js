const URL_BREED = 'https://api.thecatapi.com/v1/breeds';
const URL_SEACRH_BREED ='https://api.thecatapi.com/v1/images/search?breed_ids=';
const api_key ='live_UYcNHMXMZUE8f3KQl2VWhf8LHKxL9n8ZxPDMX3MYZGFamrSUaM0QqEjYkFXdce9u';
function fetchBreeds() {
  return fetch(URL_BREED, {
    headers: {
      'x-api-key': api_key,
    },
  }).then(response => {
    if (!response.ok) {
      throw new Error('Mistake');
    }
    return response.json();
  });
}

function fetchCatByBreed(breedId) {
  return fetch(URL_SEACRH_BREED+`${breedId}`, {
    headers: {
      'x-api-key': api_key,
    },
  }).then(response => {
    if (!response.ok) {
      throw new Error('Mistake');
    }
    return response.json();
  });
}
export { fetchBreeds, fetchCatByBreed }; 