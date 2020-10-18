const userData = { name: "test" };
const axios = {
  // get: url => new Promise((resolve) => resolve(jest.fn().mockImplementation(() => userData))),
  get: jest.fn(() => Promise.resolve({ data: userData })),
};

export default axios;
