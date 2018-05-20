/*
Area and Perimeter
Write a JS function that calculates the area and perimeter of a rectangle by given two sides.
The input comes as 2 numbers that are the lengths of the 2 sides of the rectangle (sideA and sideB)
The output should be printed to the console on two lines.
*/

function areaAndPerimeter(a, b) {
    let area = a * b;
    let perimeter = 2 * (a) + 2 * (b);
    console.log(area);
    console.log(perimeter);
}

areaAndPerimeter(2, 2);
areaAndPerimeter(1, 3);
areaAndPerimeter(2.5, 3.14);