const removeFromArray = function(arr, ...removeElements) {
    const filteredArr = arr.filter(function(element) {
        return !removeElements.includes(element);
    });
    return filteredArr;
};

// Do not edit below this line
module.exports = removeFromArray;
