

export const  creatCard = (pokemon) => {
  console.log(pokemon.sprites.other['official-artwork']['front_default']);
  const row = document.getElementById('row');
  const col = document.createElement('div');
  col.classList.add('col');

  const imgCard = document.createElement('div');
  imgCard.style.backgroundImage = `url(${pokemon.sprites.other['official-artwork']['front_default']})`;
  imgCard.classList.add('img-card');
  col.appendChild(imgCard);
  // const cardImg = document.createElement('img');
  // cardImg.attributes.src = pokemon.sprites.other['official-artwork']['front_default'];
  //
  // cardImg.attributes.alt = "pokemon-sprites";
  // col.appendChild(cardImg);

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
  iTag.classList.add('fa-solid','fa-heart');

  aTag.appendChild(iTag);
  like.appendChild(aTag)


  col.appendChild(description);

  const likeCount = document.createElement('p');
  likeCount.classList.add('like-count');
  likeCount.innerText = '2 likes';

  like.appendChild(likeCount);
  description.appendChild(like);

  const pokeAction = document.createElement('div');
  pokeAction.classList.add('poke-action');

  const pokeActionBtnComment = document.createElement('button');
  pokeActionBtnComment.attributes.type = 'button';
  pokeActionBtnComment.innerText = 'Information';
  pokeActionBtnComment.classList.add('btn', 'btn-outline-dark');
  pokeAction.appendChild(pokeActionBtnComment);

  // const pokeActionReservation = document.createElement('button');
  // pokeActionReservation.attributes.type = 'button';
  // pokeActionBtnComment.innerText = 'Information';
  // pokeActionReservation.classList.add('btn', 'btn-outline-dark');
  // pokeAction.appendChild(pokeActionReservation);

  col.appendChild(description);
  col.appendChild(pokeAction);

  row.appendChild(col);
}
