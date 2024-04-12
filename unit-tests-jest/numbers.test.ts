import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [1, 4, 5, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0]);
  });
});

describe('toDollars', () => {
  it('returns a number formatted in dollars and cents.', () => {
    const amount = 777;
    const result = toDollars(amount);
    expect(result).toEqual(`$7.77`);
  });
});

describe('divideBy', () => {
  it('returns a new array of numbers where every entry has been divided by the given divisor', () => {
    const numbers = [2, 4, 6, 8, 10];
    const divisor = 2;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});

describe('multipleBy', () => {
  it('modifies an object by multiplying the value of each key, but only if that value is a number', () => {
    const obj = { quantity: 4 };
    const multiplier = 2;
    const result = multiplyBy(obj, multiplier);
    expect(result).toEqual({ quantity: 8 });
  });
});
