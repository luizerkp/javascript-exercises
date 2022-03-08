const palindromes = function (string) {
   string = string.toLowerCase().replace(/[^a-z]/g, '');
   reverse_string = string.split('')
   reverse_string = reverse_string.reverse().join('');
   return string === reverse_string;
};

// Do not edit below this line
module.exports = palindromes;
