import axios from "axios";
import { register } from "../user";
import { verifyUsername } from "../verify";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should post user when validated", async () => {
    // TODO 19: add test here
    const url = "/user";
    const username = "username";
    const password = "password";

    const data = await register(username, password);

    expect(axios.post).toHaveBeenCalledWith(url, { username, password });
    expect(data).toEqual({});
  });

  test("should reject with Error when username is invalid", async () => {
    verifyUsername.mockReturnValue(false);
    const username = "username";
    const password = "password";

    const result = register(username, password);

    await expect(result).rejects.toThrow(
      new Error("wrong username or password")
    );
  });
});
