import DB from "./DB";

describe("Database", () => {
  let db;
  beforeEach(() => {
    db = new DB();
  });
  describe("getRows()", () => {
    it("should return an array", async () => {
      expect.assertions(1);
      const rows = await db.getRows();
      expect(rows).toBeInstanceOf(Array);
    });
    it("should return an empty array when no rows are present", async () => {
      expect.assertions(1);
      const rows = await db.getRows();
      expect(rows.length).toBe(0);
    });
  });
  describe("insert()", () => {
    it("should return the same data as inserted", async () => {
      expect.assertions(1);
      const user1 = { name: "Michael", surname: "Bagietka" };
      const addUser1 = await db.insert(user1);
      expect(addUser1).toEqual(user1);
    });
    it("should add a new user to the database", async () => {
      expect.assertions(1);
      const user1 = { name: "Michael", surname: "Bagietka" };
      await db.insert(user1);
      const rows = await db.getRows();
      expect(rows.length).toBe(1);
    });
    it("should return an error message when data.id is not a number", async () => {
      expect.assertions(1);
      const user1 = { id: "not number", name: "Michael", surname: "Bagietka" };

      await expect(db.insert(user1)).rejects.toBe("ID can be only number!");
    });
    it("should return an error message when data.id is a duplicate", async () => {
      expect.assertions(1);
      const user1 = { id: 5, name: "Michael", surname: "Bagietka" };
      const user2 = { id: 5, name: "Michael2", surname: "Bagietka2" };

      try {
        await db.insert(user1);
        await db.insert(user2);
      } catch (error) {
        expect(error).toMatch("ID can't be duplicated!");
      }
    });
    it("should add an id to data without an id property", async () => {
      expect.assertions(1);
      const user1 = { name: "Michael", surname: "Bagietka" };

      await db.insert(user1);
      const [getUser1] = await db.getRows();
      expect(getUser1).toHaveProperty("id");
    });
  });
  describe("select()", () => {
    const user = { id: 5, name: "TestUser" };
    beforeEach(async () => {
      await db.insert(user);
    });
    it("should return the user by id", async () => {
      expect.assertions(1);
      const selectedItem = await db.select(5);
      expect(selectedItem).toEqual(user);
    });
    it("should return an error if a non-existent id is passed", async () => {
      expect.assertions(1);
      const wrongId = 3;
      await expect(db.select(wrongId)).rejects.toBe("ID not found");
    });
  });
  describe("remove()", () => {
    const user = { id: 5, name: "TestUser" };
    beforeEach(async () => {
      await db.insert(user);
    });
    it("should remove an item from the database by id", async () => {
      expect.assertions(2);

      await expect(db.remove(5)).resolves.toBe("Item was remove!");
      await expect(db.select(5)).rejects.toBe("ID not found");
    });
    it("should return an error when a non-existent id is passed", async () => {
      expect.assertions(1);

      await expect(db.remove(3)).rejects.toBe("Item not exist!");
    });
  });
});
