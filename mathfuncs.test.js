const mathfuncs = require('./mathfuncs');

test('a fibbonacci is the sum of the two previous numbers (starting with 2 ones)', () => {
  expect(mathfuncs.fibonacci(0)).toBe(0);
  expect(mathfuncs.fibonacci(1)).toBe(1);
  expect(mathfuncs.fibonacci(2)).toBe(1);
  expect(mathfuncs.fibonacci(3)).toBe(2);
  expect(mathfuncs.fibonacci(4)).toBe(3);
  expect(mathfuncs.fibonacci(5)).toBe(5);
  expect(mathfuncs.fibonacci(10)).toBe(55);
});

test('our fibonacci is a little weaksauce', () => {
  expect(() => mathfuncs.fibonacci(100)).toThrow();
});

test('check if factorial is working', () => {
  expect(mathfuncs.factorial(2)).toBe(2);
  expect(mathfuncs.factorial(3)).toBe(6);

  expect(mathfuncs.factorial(10)).toBe(3628800);
});