function fibonacci(number) {
  const fibObj = {};

  // if (number > 50) throw new Error('that\'s way too hard');
  if (number === 1) return 1;
  if (number < 1) return 0;
  var a = 1, b = 0, temp;

  while (number >= 0){
    temp = a;
    a = a + b;
    b = temp;
    number--;
  }

  // return b;
  fibObj.index = b;
  console.log(fibObj);
  return fibObj;
}

function factorial(num) {
  if (num <= 1) return 1;

  return (num * factorial(num - 1));
}

module.exports = {
  fibonacci,
  factorial
};