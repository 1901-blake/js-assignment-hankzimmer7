/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
    let result = true;
    for (let i = 0; i < someStr.length; i++) {
        if (someStr[i] !== someStr[someStr.length-i-1]) {
            result = false;
        }
    }
    return result;
}

//Testing the function
inputString = "racecar";
palindromicity = isPalindrome(inputString);
console.log(`Is ${inputString} a palindrome? ${palindromicity}`);

inputString = "hello";
palindromicity = isPalindrome(inputString);
console.log(`Is ${inputString} a palindrome? ${palindromicity}`);