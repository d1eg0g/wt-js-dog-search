import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_C5PV0uAMIkf36ERy9ftR72pq8zFCjE1WQTVXK2FT4gnUDYi05WsabdLzeL2dTHtT';

export async function fetchBreeds() {
  return await axios
    .get('https://api.thedogapi.com/v1/breeds')
    .then(response => response.data);
}

export async function fetchDogByBreed(breedId) {
  return await axios
    .get(`https://api.thedogapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => response.data);
}