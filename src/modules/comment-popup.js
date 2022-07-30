import chooseStyle from './card-style.js';
import commentAPI from './involment-comment.js';

export const updateUl = (data, ul, h3) => {
  ul.innerHTML = '';
  if (data.length > 0) {
    data.forEach((child) => {
      const commentLi = document.createElement('li');
      commentLi.classList.add('comment-li');

      const usernameP = document.createElement('p');
      usernameP.textContent = `user: ${child.username}`;

      const commentP = document.createElement('p');
      commentP.textContent = `coment: ${child.comment}`;

      const dateP = document.createElement('p');
      dateP.classList.add('ul-date');
      dateP.textContent = `${child.creation_date}`;

      commentLi.appendChild(usernameP);
      commentLi.appendChild(commentP);
      commentLi.appendChild(dateP);
      ul.appendChild(commentLi);
    });
  }
  h3.textContent = `coments (${data.length})`;
};

const createCommentPopup = async (pokemon) => {
  const commentWrapper = document.querySelector('.modal-wrapper');
  commentWrapper.style.zIndex = 99;

  const commentModal = document.createElement('div');
  commentModal.classList.add('modal', 'comments');
  // chooseStyle(pokemon.type[0], commentModal);

  const h3 = document.createElement('h3');
  h3.classList.add('modal-h3');
  h3.textContent = 'coments';
  // h3.classList.add('form-p');

  const commentsData = await commentAPI.getComment(pokemon.id);
  const commentUl = document.createElement('ul');
  commentUl.classList.add('modal-ul');
  if (commentsData.error) {
    h3.textContent = 'coments (0)';
  } else {
    updateUl(commentsData, commentUl, h3);
  }
  // create comments

  // create form
  const form = document.createElement('form');
  const p = document.createElement('p');
  p.textContent = 'Add your comment';
  p.classList.add('form-p');
  form.appendChild(p);

  const inputName = document.createElement('input');
  inputName.setAttribute('type', 'text');
  inputName.placeholder = 'Your name';
  inputName.classList.add('form-input');
  form.appendChild(inputName);

  const inputComments = document.createElement('textArea');
  inputComments.placeholder = 'Your comment of the pokemon';
  inputComments.classList.add('form-textarea');
  form.appendChild(inputComments);

  const inputSubmit = document.createElement('input');
  inputSubmit.setAttribute('type', 'submit');
  inputSubmit.value = 'Submit';
  inputSubmit.classList.add('form-submit');
  form.appendChild(inputSubmit);

  inputSubmit.addEventListener('click', async (e) => {
    e.preventDefault();
    if (inputName.value.trim() === '') {
      inputName.placeholder = 'please enter your name';
    } else if (inputComments.value.trim() === '') {
      inputComments.placeholder = 'please enter your descripion or comment';
    } else {
      await commentAPI.postComment({
        item_id: pokemon.id,
        username: inputName.value,
        comment: inputComments.value,
      });
      const newData = await commentAPI.getComment(pokemon.id);
      updateUl(newData, commentUl, h3);

      inputComments.value = '';
      inputName.value = '';
    }
  });

  // delete the modal
  window.addEventListener('click', (e) => {
    if (e.target === commentWrapper) {
      commentWrapper.style.zIndex = -1;
      commentModal.remove();
    }
  });

  // appending the childs in order

  commentModal.appendChild(h3);
  commentModal.appendChild(commentUl);
  commentModal.appendChild(form);
  commentWrapper.appendChild(commentModal);
};

export default createCommentPopup;