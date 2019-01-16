/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

//Object Literal
let hank = {
    name: 'Hank',
    age: 30,
    hobby: 'Video Games',
    hasLaptop: true,
    language: 'English',
    location: 'Tampa'
}

console.log(hank);

//Constructor Function
function Person(name, age, hobby, hasLaptop, language, location) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
    this.hasLaptop = hasLaptop;
    this.language = language;
    this.location = location;
}

let joey = new Person('Joey', 25, 'Larping', true, 'English','Denver')
console.log(joey);

//ES6 Class
class Human {
    constructor(name, age, hobby, hasLaptop, language, location) {
        this.name = name;
        this.age = age;
        this.hobby = hobby;
        this.hasLaptop = hasLaptop;
        this.language = language;
        this.location = location;
    }
}

let tom = new Human('Tom','40','Smiling',false,'All','USA')
console.log(tom);