/*
Biggest of 3 Numbers
Write a JS function that finds the biggest of 3 numbers.
The input comes as array of 3 numbers.
The output is the biggest from the input numbers.
*/

function biggestNumber(input) {
    let number1 = input[0];
    let number2 = input[1];
    let number3 = input[2];

    console.log(Math.max(number1, number2, number3));
}

biggestNumber([5, -2, 7]);
biggestNumber([130, 5, 99]);
biggestNumber([43, 43.2, 43.1]);