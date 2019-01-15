/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
    let currentNumber = 0;
    let nextNumber = 1;
    for ( let i = 0; i < n; i++) {
        let temp = nextNumber;
        nextNumber += currentNumber;
        currentNumber = temp;
    }
    return currentNumber;
}

let position = 1000;
let result = fib(position);
console.log(`Number ${position} in the Fibonacci sequence is ${result}`);