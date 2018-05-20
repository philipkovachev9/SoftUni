/*
Functional Calculator
Write a JS program that receives two variables and an operator and performs a calculation between the variables,
using the operator. Store the different functions in variables and pass them to your calculator.
The input comes as three arguments – two numbers, and a string, representing the operator.
The output should be printed on the console.
*/

// Solution #1, I wanted to practice the swith statement:

function calculator(num1, num2, operation) {
    var result = 0;
    switch (operation) {
    case "+":
        result = num1 + num2;
        console.log(result);
        break;
    case "/":
        result = num1 / num2;
        console.log(result);
        break;
    case "*":
        result = num1 * num2;
        console.log(result);
        break;
    }

}

calculator(2, 3, "+");
calculator(3, 3, "/");
calculator(18, -1, "*");