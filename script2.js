function getFactorial(n) {
  if (isNaN(n)) {
    return "not a number";
  }

  if (n <= 1) {
    return 1;
  }

  return n * getFactorial(n - 1);
}

function multiply(x) {
  return function (y) {
    if (typeof y === "undefined") {
      return x;
    }
    return multiply(x * y);
  };
}

module.exports = { getFactorial, multiply };
