const leapYears = function(year) {

    let leap = false;
    const firstcheck = 4;
    const secondcheck = 100;
    const thirdcheck = 400;

    if ((year % firstcheck) === 0 && (year % secondcheck) !== 0) {
        leap = true;
    }
    if ((year % secondcheck) === 0 && (year % thirdcheck) === 0) {
        leap = true;
    }
    return leap;   

};

// Do not edit below this line
module.exports = leapYears;
