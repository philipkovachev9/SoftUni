/*Distance over Time
Two objects start from point A and travel in the same direction at constant speeds V 1 and V 2 for a period T. Write a
JS function that calculates the distance between the two object at the end of the period.

The input comes as array of numbers. The first two elements are the speeds to the two objects in km/h and the
third element is the time in seconds.
The output should be printed to the console. Calculate the distance in meters.
*/

function distanceCalc(input) {
    let distance1 = (input[0] / 3.6) * input[2];
    let distance2 = (input[1] / 3.6) * input[2];
    let detla = Math.abs(distance1 - distance2);
    console.log(delta);
}