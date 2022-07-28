// export default fetch;

// a promise function to make a fetch request to the API
const fetchApi = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1&offset=0');
  return response.json();
};

export default fetchApi;
