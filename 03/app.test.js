import randomNumber from "./app";

describe("randomNumber function", () => {
  it("return 1 if min is 1 and max is 1", () => {
    expect(randomNumber(1, 1).toBe(1));
  });
});
