export const mockApi = new Promise((resolve, reject) => {
  resolve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  reject(new Error('error'));
});

export const mockLen = mockApi.then((data) => data.length);