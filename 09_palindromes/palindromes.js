const palindromes = function (sen='ZZZZ car, a man, a maracaz.') {
   sen = sen.toLowerCase().replace(/[^a-z]/g, '');
   reverse_sen = sen.split('')
   reverse_sen = reverse_sen.reverse().join('');
   return sen === reverse_sen;
};

// Do not edit below this line
module.exports = palindromes;
