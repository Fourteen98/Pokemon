const getAppKey = '0rucBNxYXY17tjHN06zy';
const apiUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${getAppKey}/likes/`;

const involvementFetchLikes = (pokemonId, likeCount) => fetch(apiUrl)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((pokemon) => {
      if (pokemon.item_id === pokemonId) {
        likeCount.innerText = `${pokemon.likes} likes`;
      }
    });
  });

export default involvementFetchLikes;