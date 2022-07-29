const getValues = (pokemon) => {
  const heldItems = [];
  if (pokemon.held_items.length === 0) {
    heldItems.push('cannot drop any items');
  } else {
    for (let index = 0; index < 1; index += 1) {
      heldItems.push(`${pokemon.held_items[index].item.name}`);
    }
  }

  const types = [];
  pokemon.types.forEach((element) => types.push(`${element.type.name}`));

  const games = [];
  for (let index = 0; index < 2; index += 1) {
    games.push(`${pokemon.game_indices[index].version.name}`);
  }

  const arr = {
    img: pokemon.sprites.other['official-artwork'].front_default,
    name: pokemon.name,
    items: heldItems.join(', '),
    type: types.join(', '),
    games: games.join(', '),
    exp: pokemon.base_experience,
    id: pokemon.id,
  };
  return arr;
};

export default getValues;
