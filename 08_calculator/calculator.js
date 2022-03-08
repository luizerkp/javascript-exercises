const add = function(first, second) {
  return first + second;
};

const subtract = function(first, second) {
	return first - second;
};

const sum = function(arr) {
  let total = 0;
  arr.forEach(function(element) {total += element;});
  return total;
};

const multiply = function(arr) {
  let total = 1;
  arr.forEach(function(element) {total *= element;});
  return total;
};

const power = function(base, power) {
  return Math.pow(base, power);
};

const factorial = function(number) {
  if (number === 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
