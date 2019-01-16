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

//Test the code
let maxNumber = 20;
for (let i = 0; i < maxNumber; i++) {
    let result = fib(i);
    console.log(`Number ${i} in the Fibonacci sequence is ${result}`);
}