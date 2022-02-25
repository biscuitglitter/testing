const capitalize = require('./capitalize');

test("the first letter is capitalized", () => {
  expect(capitalize("bimo")).toBe("Bimo");
});