const reverseString = require('./reverseString');

test("the string is reversed", () => {
  expect(reverseString("bimo")).toBe("omib");
});