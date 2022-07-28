const createPopup = (item) => {
  // get modal wrapper and create modal individually
  const modalWrapper = document.querySelector('.modal-wrapper');
  modalWrapper.style.zIndex = 99;
  const modal = document.createElement('div');
  modal.classList.add('modal');

  // create img
  const divImg = document.createElement('div');
  const img = document.createElement('img');
  img.setAttribute('src', item.img);
  img.setAttribute('alt', `img of ${item.name}`);
  divImg.appendChild(img);

  // create title
  const title = document.createElement('h2');
  title.textContent = item.name;
  // create info div
  const divInfo = document.createElement('div');
  divInfo.classList.add('modal-information');
  // create info p
  const infoItem = document.createElement('p');
  infoItem.classList.add('information-item');
  infoItem.textContent = `items: ${item.items}`;
  divInfo.appendChild(infoItem);

  const infoType = document.createElement('p');
  infoType.classList.add('information-games');
  infoType.textContent = `type: ${item.type}`;
  divInfo.appendChild(infoType);

  const infoBasicExp = document.createElement('p');
  infoBasicExp.classList.add('information-games');
  infoBasicExp.textContent = `base experience: ${item.exp}`;
  divInfo.appendChild(infoBasicExp);

  const infoGames = document.createElement('p');
  infoGames.classList.add('information-games');
  infoGames.textContent = `games: ${item.games}`;
  divInfo.appendChild(infoGames);

  modal.appendChild(divImg);
  modal.appendChild(title);
  modal.appendChild(divInfo);
  modalWrapper.appendChild(modal);

  window.addEventListener('click', (e) => {
    if (e.target === modalWrapper) {
      modalWrapper.style.zIndex = -1;
      modal.remove();
    }
  });
};

export default createPopup;