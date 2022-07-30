/* eslint-disable no-console */
// generate random number betweenn 20 and 50
export const randomNumber = () => Math.floor(Math.random() * (50 - 20 + 1)) + 20;

export const start = randomNumber();
export const end = randomNumber();

// a promise function to make a fetch request to the API
export const fetchApi = async (type) => {
  const response = await fetch(`https://pokeapi.co/api/v2/type/${type}/`);
  return response.json();
};

export const calculateNumberOfItems = (count, end) => {
  if (count === end) {
    return count;
  }
  return 0;
};
