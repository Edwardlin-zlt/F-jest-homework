const userData = { name: "test" };
const axios = {
  get: jest.fn(() => Promise.resolve({ data: userData })),
  post: jest.fn(() => Promise.resolve({ data: {} }).catch((err) => err)),
};

export default axios;
