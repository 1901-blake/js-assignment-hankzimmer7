/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
    someArr.splice(index, 1);
}

//Testing the function
let someArr = ['desk', 'laptop', 'mouse', 'mouspad', 'water'];
console.log('Before Splice', someArr);
spliceElement(someArr, 3);
console.log('After Splice', someArr);