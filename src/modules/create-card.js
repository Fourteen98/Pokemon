/* eslint-disable no-console, radix */
import involvementPostLikes from './involvement-post-likes.js';
import involvementFetchLikes from './involvement-fetch-likes.js';
import getValues from './getValues.js';
import createPopup from './popupCreator.js';

const creatCard = (pokemon) => {
  const row = document.getElementById('row');
  const col = document.createElement('div');
  col.classList.add('col');

  const cardImg = document.createElement('div');
  cardImg.style.backgroundImage = `url(${pokemon.sprites.other['official-artwork'].front_default})`;
  cardImg.classList.add('img-card');
  col.appendChild(cardImg);

  const description = document.createElement('div');
  description.classList.add('description');

  const cardName = document.createElement('h2');
  cardName.classList.add('pokemon-name');
  cardName.innerText = pokemon.forms[0].name;
  description.appendChild(cardName);

  const like = document.createElement('div');
  like.classList.add('like');

  const aTag = document.createElement('a');
  aTag.href = '#';

  const iTag = document.createElement('i');
  iTag.classList.add('fa-solid', 'fa-heart');
  iTag.id = pokemon.id;

  aTag.appendChild(iTag);
  like.appendChild(aTag);

  col.appendChild(description);

  const likeCount = document.createElement('p');
  likeCount.classList.add('like-count');
  likeCount.innerText = '0 likes';

  like.appendChild(likeCount);
  description.appendChild(like);

  const pokeAction = document.createElement('div');
  pokeAction.classList.add('poke-action');

  const pokeActionBtnComment = document.createElement('button');
  pokeActionBtnComment.attributes.type = 'button';
  pokeActionBtnComment.innerText = 'Information';
  pokeActionBtnComment.classList.add('btn', 'btn-outline-dark');
  pokeAction.appendChild(pokeActionBtnComment);

  const pokeActionReservation = document.createElement('button');
  pokeActionReservation.attributes.type = 'button';
  pokeActionReservation.innerText = 'Comments';
  pokeActionReservation.classList.add('btn', 'btn-outline-dark');
  pokeAction.appendChild(pokeActionReservation);

  pokeActionBtnComment.addEventListener('click', () => {
    createPopup(getValues(pokemon));
  });

  col.appendChild(description);
  col.appendChild(pokeAction);

  row.appendChild(col);

  setTimeout(() => involvementFetchLikes(pokemon.id.toString(), likeCount), 1000);

  iTag.addEventListener('click', (e) => {
    const likes = parseInt(likeCount.innerText.split(' ')[0]);
    likeCount.innerText = `${likes + 1} likes`;
    involvementPostLikes(e, likeCount.innerText.split(' ')[0])
      .then((r) => console.log(r))
      .catch((err) => console.log(err));
    involvementFetchLikes(e.target.id, likeCount)
      .then((r) => console.log(r))
      .catch((err) => console.log(err));
  });
};

export default creatCard;