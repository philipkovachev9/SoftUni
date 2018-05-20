/*
5. Triangle Area
Write a JS function that calculates a triangle’s area by its 3 sides.
The input comes as three number arguments, representing one side of a triangle.
The output should be printed to the console.

*/


//ES5 Syntax:

function heronsFormula(a, b, c) {
    var s = (a + b + c) / 2;
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return (area);
}

heronsFormula(2, 3.5, 4)


//ES6 Syntax:

var heronsFormula = (a, b, c) => {
    var s = (a + b + c) / 2;
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return (area);
}

heronsFormula(2, 3.5, 4)