import getUsers from "../users";

jest.mock("axios");

describe("users", () => {
  test("should get users data with mock axios get", async () => {
    // TODO 13: add async test with manual mock
    const expectData = { name: "test" };

    const actualData = await getUsers();

    expect(actualData).toEqual(expectData);
  });
});
