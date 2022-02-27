const analyzeArray = require("./analyzeArray");

test("gives sorted array with correct object", () => {
    const object = analyzeArray([3, 1, 2]);    

    expect(object).toEqual({average: 2, min: 1, max: 3, length: 3});
});

test("gives sorted array with correct object", () => {
    const object = analyzeArray([1,8,3,4,2,6]);    

    expect(object).toEqual({average: 4, min: 1, max: 8, length: 6});
});

test("gives sorted array with equal numbers", () => {
    const object = analyzeArray([1,1,1]);    

    expect(object).toEqual({average: 1, min: 1, max: 1, length: 3});
});