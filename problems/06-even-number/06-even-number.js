/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */

function isEven(someNum) {
    if (Number.isInteger(someNum/2)) {
        return true;
    } else {
        return false;
    };  
}

//Test the function
let input = 45;
let result = isEven(input);
console.log(`Is ${input} an even number? ${result}`);