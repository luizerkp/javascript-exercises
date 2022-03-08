const getTheTitles = function(arr) {
    titles = [];
    arr.forEach(function(book) {
        titles.push(book.title);
    });
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
