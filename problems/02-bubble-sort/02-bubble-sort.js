/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
    let sortedArray = numArray;
    //Initially assume the array is not sorted
    let arraySorted = false;
    //Loop as long as the array isn't sorted
    while (!arraySorted) {
        arraySorted = true;
        //Loop through the array
        for (let i = 0; i < sortedArray.length; i++) {
            //If a value is great than the number to the right of it, swap the numbers and mark the array as not sorted
            if (sortedArray[i] > sortedArray[i + 1]) {
                let temp = sortedArray[i + 1];
                sortedArray[i + 1] = sortedArray[i];
                sortedArray[i] = temp;
                arraySorted = false;
            }
        }
    }
    return sortedArray;
}

let initialArray = [9999999, 23, 5, 6, -50, 7, 8886, 4, 34525, -12, 23, 0, 12, -554, 23, 1];
console.log('Initial Array', initialArray);
let finalArray = bubbleSort(initialArray);
console.log('Sorted Array', finalArray);