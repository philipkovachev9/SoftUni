/*
Triangle of Stars
Write a JS function that outputs a triangle made of stars with variable size, depending on an input parameter. Look
at the examples to get an idea.
The input comes as a single number argument.
The output is a series of lines printed on the console, forming a triangle of variable size.
*/

function triangleOfStars(size) {
    for (i = 1; i <= size; i++) {
        console.log("*".repeat(i))

    }
     for (i = size; i <= size - 1; i--) {
            console.log("*".repeat(i))
        }
}

triangleOfStars(7);