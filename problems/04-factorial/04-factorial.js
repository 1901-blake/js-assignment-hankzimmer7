/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */

function factorial(someNum) {
    if (someNum > 1) {
        return someNum * factorial(someNum - 1);
    } else if (someNum <= 1) {
        return 1;
    } else if (someNum < 0) {
        return -1;
    }
}

//Test the function
let input = 5;
let answer = factorial(input);
console.log(`The factorial of ${input} is ${answer}`);