import randomNumber from "./app";

describe("randomNumber function", () => {
  it("return 1 if min is 1 and max is 1", () => {
    expect(randomNumber(1, 1)).toBe(1);
  });
  it("is in range 4-9", () => {
    expect.assertions(2);
    expect(randomNumber(4, 9)).toBeGreaterThanOrEqual(4);
    expect(randomNumber(4, 9)).toBeLessThanOrEqual(9);
  });
  it("throws an Error if min > max", () => {
    expect.assertions(1);
    try {
      return randomNumber(9, 5);
    } catch (error) {
      expect(error.message).toBe(
        "Wartość minimalna nie może być większa od maksymalnej!"
      );
    }
  });
  it("throws an Error if min and max are not numbers", () => {
    expect.assertions(1);

    expect(() => randomNumber("9", "5")).toThrow();
  });
});
