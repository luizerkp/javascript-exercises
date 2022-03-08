const fibonacci = function(n) {
    n = parseInt(n);
    if (n < 0) {return "OOPS";}

    let fib_array = [0, 1];
    
    for (let i = 2; i <= n; i++) {
        fib_array.push(fib_array[i-1] + fib_array[i-2]);
    }
    return fib_array[n];
};

// Do not edit below this line
module.exports = fibonacci;
