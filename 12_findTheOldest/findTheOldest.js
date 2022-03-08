const findTheOldest = function(people) {
    let oldest = {};
    people.forEach(function(person) {
        if (person.yearOfDeath === undefined) {
            person.age = new Date().getFullYear() - person.yearOfBirth;
        }
        else {
            person.age = person.yearOfDeath - person.yearOfBirth;
        }        
        if (oldest.age === undefined || person.age > oldest.age) {
            oldest = person;
        }
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
