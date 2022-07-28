const createCommentPopup = (pokemon) => {
  const commentWrapper = document.querySelector('.modal-wrapper');
  commentWrapper.style.zIndex = 99;

  const commentModal = document.createElement('div')
  commentModal.classList.add('modal','comments');
  
  // create comments
  const commentUl = document.createElement('ul');
  let example = [
    'comment 1',
    'comment 2'
  ]
  example.forEach(child => {
    let commentLi = document.createElement('li');
    commentLi.textContent = child
    commentUl.appendChild(commentLi)
  });
  
  // create form
  const form = document.createElement('form');
  const p = document.createElement('p');
  p.textContent = 'Add your comment'
  p.classList.add('form-p');
  form.appendChild(p)
  
  const inputName = document.createElement('input')
  inputName.setAttribute('type', 'text')
  inputName.placeholder = 'Your name'
  inputName.classList.add('form-input');
  form.appendChild(inputName)
  
  const inputcomments = document.createElement('textArea')
  inputcomments.placeholder = 'Your comment of the pokemon'
  inputcomments.classList.add('form-textarea');
  form.appendChild(inputcomments)
  
  const inputSubmit = document.createElement('input')
  inputSubmit.setAttribute('type', 'submit')
  inputSubmit.value = 'Submit'
  inputSubmit.classList.add('form-submit');
  form.appendChild(inputSubmit)
  
  inputSubmit.addEventListener('click', (e) => {
    e.preventDefault()
  })

  // delete the modal
  window.addEventListener('click', (e) => {
    if (e.target === commentWrapper) {
      commentWrapper.style.zIndex = -1;
      commentModal.remove();
    }
  });

  // appending the childs in order
  
  commentModal.appendChild(commentUl)
  commentModal.appendChild(form)
  commentWrapper.appendChild(commentModal)
}

export default createCommentPopup