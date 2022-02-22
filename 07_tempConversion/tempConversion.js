const ftoc = function(fahrenheit) {
return roundToOneDecimal((fahrenheit - 32) * (5 / 9));
};

const ctof = function(celcius) {
  return roundToOneDecimal((celcius * 9 / 5)+ 32);
};


function roundToOneDecimal(num) {
  return Math.round((num + Number.EPSILON) * 10) / 10;

}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
