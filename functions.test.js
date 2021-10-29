const { checkValue, fetchUser } = require("./functions");
const functions = require("./functions");

test("Adds 3 + 3 to equal 6", () => {
  expect(functions.add(3, 3)).toBe(6);
});

test("Adds 3 + 3 to NOT equal 7", () => {
  expect(functions.add(3, 3)).not.toBe(7);
});

/** CHECK FOR Truthy & Falsy VALUES 

- toBeNull matches only null
- toBeUndefined matches only undefined
- toBeDefined is the opposite of toBeUndefined
- toBeTruthy matches anything that an if statement treats as truez
- toBeFalsy matches anything that an if statement treats as false

**/

// toBeNull
test("Should be NULL", () => {
  expect(functions.isNull()).toBeNull();
});

// The 7 falsy values are: 0 , 0n , null , undefined , false , NaN , and ""
test("Should be falsy", () => {
  expect(checkValue(0)).toBeFalsy();
});

test("Users should be Anirudh Panda object", () => {
  // for array and objects
  expect(functions.createUser()).toStrictEqual({
    firstName: "Anirudh",
    lastName: "Panda",
  });
});

// less than and greater than

test("Should be under 1600", () => {
  const l1 = 800;
  const l2 = 700;
  expect(l1 + l2).toBeLessThan(1600);
});

// Regex or Strings (case specific)

test("there is no I in team", () => {
  expect("team").not.toMatch(/I/i);
});

test("but there is ani in Anirudh", () => {
  expect("anirudh").toMatch(/ani/);
});

// Arrays
test("admin should be in the data-username", () => {
  user = ["Anirudh", "Rahul", "admin"];
  expect(user).toContain("admin");
});

// Iterables
const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "milk",
];
test("the shopping list has milk on it", () => {
  expect(shoppingList).toContain("milk");
  expect(new Set(shoppingList)).toContain("milk");
});

// Exceptions

// our function

const compileAndroidCode = () => {
  throw new Error("You are using the wrong JDK!");
};

// the function that throws an exception needs to be invoked within a wrapping function otherwise the toThrow assertion will fail.

test("compiling android goes as expected", () => {
  expect(() => compileAndroidCode()).toThrow(Error);
});

// working with async data

test("User fetched name should be Leanne Graham", () => {
  // An assertion is a check that values meet certain conditions. In other words, if you use expect. assertions(5) the test will fail unless expect() is called at least 5 times. This is useful for async tests

  expect.assertions(1);
  //   return and assertions are required in case of async data
  return fetchUser().then((data) => {
    expect(data.name).toBe("Leanne Graham");
    return fetchUser().catch((err) => expect(err).toMatch("error"));
  });
});
