function fibonacci(number) {
  if (number > 50) throw new Error('that\'s way too hard');
  if (number === 1) return 1;
  if (number < 1) return 0;

  return fibonacci(number - 1) + fibonacci(number - 2);
}

function factorial(num) {
  if (num <= 1) return 1;

  return (num * factorial(num - 1));
}

module.exports = {
  fibonacci,
  factorial
};