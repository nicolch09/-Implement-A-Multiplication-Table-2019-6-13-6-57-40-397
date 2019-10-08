const add = require('../main');

it ('should add two numbers', () => {
    let expectedResult = '2*2=4\n' + '2*3=6 3*3=9\n' + '2*4=8 3*4=12 4*4=16';
    expect(add(2, 4)).toBe(expectedResult);
});

it ('should add two numbers', () => {
    let expectedResult = '2*2=4\n' + '2*3=6 3*3=9\n' + '2*4=8 3*4=12 4*4=16\n' + '2*5=10 3*5=15 4*5=20 5*5=25';
    expect(add(2, 5)).toBe(expectedResult);
});

it ('should add two numbers', () => {
    let expectedResult = '5*5=25';
    expect(add(5, 5)).toBe(expectedResult);
});

it ('should add two numbers', () => {
    let expectedResult = null;
    expect(add(5, 2)).toBe(expectedResult);
});

it ('should add two numbers', () => {
    let expectedResult = null;
    expect(add(-3, -1)).toBe(expectedResult);
});

it ('should add two numbers', () => {
    let expectedResult = null;
    expect(add(1, 1001)).toBe(expectedResult);
});