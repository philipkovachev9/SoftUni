/*
You are given an array of numbers
Print the smallest two numbers
*/

function sort(array) {
    array.sort(function(a, b) {
        return a - b;
     })
     let firstAndSecondElements = array.slice(0,2)
     return firstAndSecondElements;
    }
    
    sort([54,23,14,46]);