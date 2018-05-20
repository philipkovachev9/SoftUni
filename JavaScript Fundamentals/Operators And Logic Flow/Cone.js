/*
6. Cone
Write a JS function to calculate a cone’s volume and surface area by given height and radius at the base.
The input comes as two number arguments. The first element is the cone’s radius and the second is its height.
The output should be printed to the console on a new line for every result.
*/


// ES5 Syntax:

function coneVolumeAndSurface(height, radius) {


    var volume = 1 / 3 * (Math.PI * radius * radius * height);
    var slantHeight = Math.sqrt(radius * radius + height * height);
    var area = Math.PI * radius * (radius + slantHeight);

    console.log(volume);
    console.log(area);



}

coneVolumeAndSurface(3, 5);