export const mockApi = new Promise((resolve, reject) => {
  resolve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  reject(new Error('error'));
});

export const mockLen = mockApi.then((data) => data.length);

export const updateUl = (data, ul) => {
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
};