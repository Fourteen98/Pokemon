import { mockApi, mockLen } from './__mock__/api-mock.js';

describe('counter for api and pokemon card', () => {
  test('verify number of items on board is equal api limit', () => {
    expect(mockApi).toStrictEqual(mockLen);
  });
});