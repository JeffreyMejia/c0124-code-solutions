import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [1, 4, 5, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0]);
  });
  it('works with an empty array', () => {
    const numbers: number[] = [];
    const result = evenNumbers(numbers);
    expect(result).toEqual([]);
  });
});

describe('toDollars', () => {
  it('returns a number formatted in dollars and cents.', () => {
    const amount = 777;
    const result = toDollars(amount);
    expect(result).toEqual(`$7.77`);
  });
  it('formats decimals with just two digits rounded up', () => {
    const amount = 7.77777777;
    const result = toDollars(amount);
    expect(result).toEqual(`$7.78`);
  });
});

describe('divideBy', () => {
  it('returns a new array of numbers where every entry has been divided by the given divisor', () => {
    const numbers = [2, 4, 6, 8, 10];
    const divisor = 2;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([1, 2, 3, 4, 5]);
    it('does not modify the original array', () => {
      const numbers = [2, 3, 4, 8, 10];
      const divisor = 2;
      const result = divideBy(numbers, divisor);
      expect(result).toBe([1, 1.5, 2, 4, 5]);
      expect(numbers).toBe([2, 3, 4, 8, 10]);
      expect(numbers).not.toBe(result);
    });
  });
});

describe('multipleBy', () => {
  it('multiplies number values', () => {
    const obj = { quantity: 4, cute: 6 };
    const multiplier = 2;
    const result = multiplyBy(obj, multiplier);
    expect(result).toEqual({ quantity: 8, cute: 12 });
    it('only multiplies numbers', () => {
      const obj = { what: false, the: null, heck: 7 };
      const multiplier = 7;
      const result = multiplyBy(obj, multiplier);
      expect(result).toBe({ what: false, the: null, heck: 49 });
      it('modifies the original object', () => {
        const obj = { foo: 1, bar: 2 };
        const multiplier = 4;
        const result = multiplyBy(obj, multiplier);
        expect(obj).toBe(result);
      });
    });
  });
});
