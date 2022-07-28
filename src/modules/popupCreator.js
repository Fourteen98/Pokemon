const createPopup = (item) => {

  console.log(item)
  console.log("create popup")
  // get modal wrapper and create modal individually
  const modalWrapper = document.querySelector('.modal-wrapper')
  const modal = document.createElement('div')
  modal.classList.add('modal', 'notDisplay');

  console.log(item)
  // create img
  const divImg = document.createElement('div')
  const img = document.createElement('img')
  img.setAttribute('src',item.img)
  img.setAttribute('alt', `img of ${item.name}`)
  divImg.appendChild(img)

  // create title
  const title = document.createElement('h2');
  title.textContent = item.name;
  // create info div
  const divInfo = document.createElement('div');
  divInfo.classList.add('modal-information');
  // create info p
  const infoItem = document.createElement('p');
  infoItem.classList.add('information-item');
  infoItem.textContent = item.items
  console.log(infoItem.textContent)
  divInfo.appendChild(infoItem)


  const  infoType = document.createElement('p');
  infoType.classList.add('information-games');
  infoType.textContent = `type: ${item.types}`;
  divInfo.appendChild(infoType)

  const infoExperience = document.createElement('p');
  infoExperience.classList.add('information-games');
  infoExperience.textContent = `something: ${item.exp}`;
  divInfo.appendChild(infoExperience)

  const infoGames = document.createElement('p');
  infoGames.classList.add('information-games');
  infoGames.textContent = `games: ${item.games}`;
  divInfo.appendChild(infoGames)

  modal.appendChild(divImg)
  modal.appendChild(title)
  modal.appendChild(divInfo)
  modalWrapper.appendChild(modal)
}

export default createPopup