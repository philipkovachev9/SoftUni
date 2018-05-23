/* Sum First Last
Write a JS function that calculates and prints the sum of the first and the last elements in an array.
The input comes as array of string elements holding numbers.
The output is the return value of your function.
*/
function sumFirstandLast (array) {
    return Number(array[0]) + Number(array[array.length - 1]);
 }
 
 console.log(sumFirstandLast(['20','30','40']));