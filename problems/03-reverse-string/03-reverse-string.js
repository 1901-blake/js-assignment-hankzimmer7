/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
    let reversed = "";
    for (let i = someStr.length; i >= 0; i--) {
        reversed += someStr.charAt(i);
    }
    return reversed;
}

//Test the function
inputString = "Hello World";
reversed = reverseStr(inputString);
console.log(reversed);