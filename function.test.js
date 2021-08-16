const functions = require("./function");

// toBe
test("add 2+2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

// toBeNull
test("should be null", () => {
  expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test("should be falsy", () => {
  expect(functions.checkValue()).toBeFalsy();
});

// toEqual
test("user should be Omar Ouhra", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Omar",
    lastName: "Ouhra",
  });
});

// Less than and greater than
test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

// Regex
test("There is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

// Arrays
test("Admin should be in usernames", () => {
  usernames = ["omar", "ali", "mohamed"];
  expect(usernames).toContain("ali");
});

// Working with asyn data
test("User fetch name should be Leanne Graham",async () => {
  expect.assertions(1);
  const data= await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
