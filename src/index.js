import './style.css';
import creatCard from './modules/create-card.js';
import { fetchApi, calculateNumberOfItems, randomNumber, end } from './modules/pokemon-api.js';

const spotlight = document.querySelector('.spotlight');
const row = document.getElementById('row');
const selection = document.querySelector('#type-selection')

document.addEventListener('DOMContentLoaded', async () => {
  const res = await fetchApi(selection.value);
  const pokemonResult = res.pokemon;
  let lessPokemon = []
  for (let i = 0; i < end; i++) {
    lessPokemon.push(pokemonResult[i])
  }
  lessPokemon.forEach( async (pokemon) => {
    const { url } = pokemon.pokemon;
    const pokemonData = await fetch(url);
    const pokemonJson = await pokemonData.json();
    creatCard(pokemonJson);
    spotlight.innerText = calculateNumberOfItems(row.childElementCount, end);
  });
});

selection.addEventListener('change', async () => {
  document.querySelector('#row').innerHTML = ''
  const res = await fetchApi(selection.value);
  const pokemonResult = res.pokemon;
  let lessPokemon = []
  let end = randomNumber();
  for (let i = 0; i < end; i++) {
    lessPokemon.push(pokemonResult[i])
  }
  lessPokemon.forEach( async (pokemon) => {
    const { url } = pokemon.pokemon;
    const pokemonData = await fetch(url);
    const pokemonJson = await pokemonData.json();
    creatCard(pokemonJson);
    spotlight.innerText = calculateNumberOfItems(row.childElementCount,end);
  });
})

