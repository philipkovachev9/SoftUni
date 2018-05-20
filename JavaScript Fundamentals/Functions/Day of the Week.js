/*Write a JS function that prints a number between 1 and 7 when a day of the week is passed to it as a string and an
error message if the string is not recognized.
The input comes as a single string argument.
The output should be returned as a result of your program.*/

function print(day) {
    switch (day) {
    case "Monday":
        day = 1;
        break;
    case "Tuesday":
        day = 2;
        break;
    case "Wednesday":
        day = 3;
        break;
    case "Thursday":
        day = 4;
        break;
    case "Friday":
        day = 5;
        break;
    case "Saturday":
        day = 6;
        break;
    case "Sunday":
        day = 7;
        break;

    default:
        day = "error"

    }
    console.log(day);
}

print("Monday")
print("Tuesday")
print("Wednesday")
print("Thursday")
print("SomethingRandom");