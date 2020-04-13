const myAtoi = require(".");

test("should return 42", () => {
  expect(myAtoi("42")).toBe(42);
});

test("should return -42", () => {
  expect(myAtoi("-42")).toBe(-42);
});

test("should return 4193", () => {
  expect(myAtoi("4193 with words")).toBe(4193);
});

test("should return 0", () => {
  expect(myAtoi("words and 987")).toBe(0);
});

test("should return -2147483648", () => {
  expect(myAtoi("-91283472332")).toBe(-2147483648);
});
