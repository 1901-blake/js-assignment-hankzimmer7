/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and its value. */
function objectProperties(someObj) {
    for (const key in someObj) {
        if (someObj.hasOwnProperty(key)) {
            console.log(`${key}: ${someObj[key]}`);
        }
    }
}


//Test the function
let garfield = {
    name: 'Garfield',
    species: 'cat',
    age: 6,
    legs: 4,
    declawed: false,
}

objectProperties(garfield);