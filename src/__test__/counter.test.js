const limit = require('../modules/pokemon-api.js').limit;
const calculateNumberOfItems = require('../modules/pokemon-api.js').calculateNumberOfItems;

describe('counter for api and pokemon card', () => {
  test('verify number of items on board is equal api limit', () => {
    expect(calculateNumberOfItems(limit)).toBe(limit);
  });
});