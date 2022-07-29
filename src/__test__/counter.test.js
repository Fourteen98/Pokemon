/**
 * @jest-environment jsdom
 */
import { mockApi, mockLen, updateUl } from './__mock__/api-mock.js';

document.body.innerHTML = '<h3 class="modal-h3">coments (1) </h3><ul class="modal-ul"><li class="comment-li"><p>user: anonymous</p><p>coment: good pokemon</p><p class="ul-date">2022-07-29</p></li></ul>';

const testData = [
  {
  username: 'karen',
  comment: 'i love this pokemon',
  creation_date: '2022-07-29'
}
]

describe('counter for api and pokemon card', () => {
  test('verify number of items on board is equal api limit', () => {
    expect(mockApi).toStrictEqual(mockLen);
  });

  test('verify number of comments', () => {
  updateUl(testData, document.querySelector('.modal-ul'))
    const li = document.querySelectorAll('.comment-li')
    const arrLI = Array.from(li)
    expect(arrLI.length).toBe(2);
  });
});