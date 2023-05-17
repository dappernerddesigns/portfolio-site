const { expect } = require("@jest/globals");
const checkWinner = require("./utils");

describe("Checking winners", () => {
  test("Loops winner combos and returns true if there is a winner", () => {
    let userOne = [2, 8, 4, 5];

    let actual = checkWinner(userOne);
    let expected = true;

    expect(actual).toBe(expected);
  });
  test("Loops winner combos and returns false if there is not a winner", () => {
    let userOne = [5, 8, 3];

    let actual = checkWinner(userOne);
    let expected = false;

    expect(actual).toBe(expected);
  });
});
