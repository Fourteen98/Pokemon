const getValues = (pokemon) => {
  let heldItems;
  if(pokemon.held_items.length == 0) {
    heldItems = 'cannot drop any items';
  }else {
    for (let index = 0; index < 2; index++) {
      heldItems += `${pokemon.held_items[index]}, `
    }
  }

  const types = [];
  pokemon.types.forEach(element => types.push(`${element.type.name}`));

  const games = [];
  for (let index = 0; index < 2; index++) {
    games.push(`${pokemon.game_indices[index].version.name}`)
  }

  const arr = {
    img: pokemon.sprites.other['official-artwork'].front_default,
    name: pokemon.name,
    items: heldItems,
    type: types.join(', '),
    games: games.join(', '),
    exp: pokemon.base_experience
  }
  return arr
}

export default getValues

