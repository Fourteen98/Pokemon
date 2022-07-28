import './style.css';
import fetchApi, { calculateNumberOfItems } from './modules/pokemon-api.js';
import creatCard from './modules/create-card.js';

const row = document.getElementById('row');

document.addEventListener('DOMContentLoaded', async () => {
  const res = await fetchApi();
  const pokemonResult = res.results;
  pokemonResult.forEach(async (pokemon) => {
    const { url } = pokemon;
    const pokemonData = await fetch(url);
    const pokemonJson = await pokemonData.json();
    creatCard(pokemonJson);
    calculateNumberOfItems(row.childElementCount);
  });
});
