/* eslint-disable no-console */
// generate random number betweenn 20 and 50
const randomNumber = () => Math.floor(Math.random() * (50 - 20 + 1)) + 20;

export const limit = randomNumber();
const end = randomNumber();

// a promise function to make a fetch request to the API
export const fetchApi = async () => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${end}`);
  return response.json();
};

export const calculateNumberOfItems = (count) => {
  if (count === limit) {
    console.log('poker cards are equal to limit!');
    return count;
  }
  console.log('poker cards are not equal to limit!');
  return 0;
};


