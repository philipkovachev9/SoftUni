/*
4. Circle Area
Write a JS function that calculates circle area by given radius. Print the area as it is calculated and then print it
rounded to two decimal places.
The input comes as a single number argument.

*/


function circleArea(r) {
    var area = 2 * Math.PI * r;
    console.log(area);
    console.log(area.toFixed(2));
}

circleArea(5);