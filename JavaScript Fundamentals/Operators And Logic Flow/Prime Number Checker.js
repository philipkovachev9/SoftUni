/*
Write a JS function to check if a number is prime (only wholly divisible by itself and one).
The input comes as a single number argument.
The output should be the return value of your function. Return true for prime number and false otherwise.
*/

function primeNumberChecker(number) {
    if (number % number === 0 && number % 1 === number) {
        return true;

    } else {
        return false;
    }
}

primeNumberChecker(7);
primeNumberChecker(8);
primeNumberChecker(81);