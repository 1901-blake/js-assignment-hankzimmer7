/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
    let sortedArray = numArray;
    let arraySorted = false;
    while (!arraySorted) {
        arraySorted = true;
        for (let i = 0; i < sortedArray.length; i++) {
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