const sumAll = function(start = 0, end) {
    // check if the parameters are valid
    if (!checkValid(start, end)) {
        return 'ERROR';
    }

    // turn the range into an array
    const rangeArr = range(end, start);

    // sum the array
    const sum = rangeArr.reduce((total, currentVal) => total + currentVal);

    return sum;
};

// Helper function to check if the parameters are valid
function checkValid(start, end) {
    if (typeof start !== 'number' || typeof end !== 'number' || start < 0 || end < 0) {
        return false;
    }
    return true;
};

// turns a range of numbers into an array
function range(end, start) {        
    // if the start is greater than the end, swap the values
    if (start > end) {
        [start, end] = [end, start];
    }

    // define the size of the array
    const size = end - start + 1;

    return [...Array(size).keys()].map(i => i + start);
};

// Do not edit below this line
module.exports = sumAll;
