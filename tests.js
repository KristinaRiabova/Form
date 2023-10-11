const chai = require('chai');
const expect = chai.expect;
const { getFactorial, multiply } = require('./script2.js'); 

describe('getFactorial', function () {
  it(' the factorial of a number', function () {
    const result = getFactorial(5);
    expect(result).to.equal(120);
  });

  it(' string input and return the factorial', function () {
    const result = getFactorial('5');
    expect(result).to.equal(120);
  });

  it(' non-numeric input', function () {
    const result = getFactorial('blabla');
    expect(result).to.equal('not a number');
  });
});

describe('multiply', function () {
  it(' multiply two numbers', function () {
    const result = multiply(2)(3)();
    expect(result).to.equal(6); 
  });

  it('should multiply multiple numbers', function () {
    const result = multiply(-1)(677)(568)(2)();
    expect(result).to.equal(-769072); 
  });

  it(' return the number itself if only one number is provided', function () {
    const result = multiply(3)();
    expect(result).to.equal(3); 
  });
});

