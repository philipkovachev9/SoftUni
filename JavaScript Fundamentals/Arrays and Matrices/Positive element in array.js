/*
Negative / Positive Numbers
Write a JS function that processes the elements in an array one by one and produces a new array. Prepend each
negative element at the front of the result and append each positive (or 0) element at the end of the result.
The input comes as array of number elements.
The output is printed on the console, each element on a new line.
*/ 
function negativePositive(array) {
    let result = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] < 0) {
          result.unshift(array[i]);
        } else {
         result.push(array[i]);
        }
    }
    console.log(result.join('\n'));
}
negativePositive([7,-2,8,9]);
negativePositive([3, -2, 0, -1]);