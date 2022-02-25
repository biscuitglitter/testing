const calculator = require("./calculator");

test("sum", () => {
  expect(calculator.add(4, 4)).toBe(8);
});

test("sum decimal", () => {
  expect(calculator.add(4.2, 15.8)).toBeCloseTo(20);
});

test("subtract", () => {
  expect(calculator.subtract(8, 2)).toBe(6);
});

test("subtract decimal", () => {
  expect(calculator.subtract(8.5, 2)).toBeCloseTo(6.5);
});

test("multiply", () => {
  expect(calculator.multiply(8, 2)).toBe(16);
});

test("multiply decimal", () => {
  expect(calculator.multiply(10, 1.5)).toBeCloseTo(15);
});

test("divide", () => {
  expect(calculator.divide(16, 2)).toBe(8);
});

test("divide decimal", () => {
  expect(calculator.divide(10, 2.5)).toBeCloseTo(4);
});