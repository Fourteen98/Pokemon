import './style.css';
import creatCard from './modules/create-card.js';
import {fetchApi} from './modules/pokemon-api.js';



document.addEventListener('DOMContentLoaded', async () => {
  const res = await fetchApi();
  const pokemonResult = res.results;
  pokemonResult.forEach(async (pokemon) => {
    const { url } = pokemon;
    const pokemonData = await fetch(url);
    const pokemonJson = await pokemonData.json();
    creatCard(pokemonJson);

  });
});
