/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */

function substring(someStr, startIndex, endIndex) {
    //If the input is not a string, throw an exception
    if (typeof(someStr) != 'string') {
        throw new Error('Incorrect Input');
    }
    let result = someStr.substring(startIndex,endIndex);
    return result;
}

//Testing the function
let inputString = "Florida";
let start = 1;
let end = 5;
output = substring(inputString, start, end);
console.log(`The substring in ${inputString} between positions ${start} and ${end} is ${output}`);