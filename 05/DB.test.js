import DB from "./DB";

describe("DB", () => {
  describe("method getRows()", () => {
    test("should return an empty array", async () => {
      const db = new DB();
      const result = await db.getRows();
      expect(result).toHaveLength(0);
    });
  });
  describe("method insert()", () => {
    test("should return an array with 1 specific element", async () => {
      const db = new DB();
      const data = { name: "Michał", age: 18 };
      await db.insert(data);

      const result = await db.getRows();
      const [element] = result;
      expect(result).toHaveLength(1);
      expect(element).toEqual(data);
    });
    test("return error when id of object is not a number", async () => {
      const db = new DB();
      const data = { id: null };
      const insert = await db.insert(data);

      try {
        expect(insert).rejects.toMatch("ID can be only number!");
      } catch (error) {}
    });
  });
});
