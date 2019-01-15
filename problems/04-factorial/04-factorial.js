/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */

let result = 1;

function factorial(someNum) {
    if (someNum > 1) {
        result *=someNum;
        someNum -= 1;
        factorial(someNum);
    }
    return result;
}

let input = 9;
let answer = factorial(input);
console.log(`The factorial of ${input} is ${answer}`);