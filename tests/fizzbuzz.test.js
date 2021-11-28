const { fizzBuzz } = require('../fizzbuzz');

describe('fizzBuzz', () => {
  it('should throw an exception if input is not a Number', () => {
    expect(() => {
      fizzBuzz('5');
    }).toThrow();
  });

  it('should return FizzBuzz if input is divisible by 3 and 5', () => {
    const result = fizzBuzz(15);
    expect(result).toBe('FizzBuzz');
  });

  it('should return "Fizz" if input is only divisible by 3', () => {
    const result = fizzBuzz(3);
    expect(result).toBe('Fizz');
  });

  it('should return "Buzz" if input is only divisible by 5', () => {
    const result = fizzBuzz(5);
    expect(result).toBe('Buzz');
  });

  it('should return the input back if it meets none of the conditions', () => {
    const result = fizzBuzz(1);
    expect(result).toBe(1);
  });
});
