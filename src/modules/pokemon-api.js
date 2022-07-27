

// export default fetch;

// a promise function to make a fetch request to the API
export const fetchApi = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=27&offset=0');
  return response.json();
}
