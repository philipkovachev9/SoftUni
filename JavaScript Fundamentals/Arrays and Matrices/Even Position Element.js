/*
Even Position Element
Write a JS function that finds the elements at even positions in an array.
The input comes as array of string elements.
The output is the return value of your function. Collect all elements in a string, separated by space.
*/
function findEvenPositions(array) {
    let result = [];
    for (const index in array) {
        if (index % 2 === 0) {
            result.push(array[index])
        }
    }
    console.log(result.join(' '));
}

findEvenPositions(['20', '30', '40']);
findEvenPositions(['5', '10']);