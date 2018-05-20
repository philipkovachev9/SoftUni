/*
2. Boxes and Bottles
Write a JS function to calculate how many boxes will be needed to fit n bottles if each box fits k bottles.
The input comes as two number arguments. The first element is the number of bottles and the second is the
capacity of a single box.
The output should be printed to the console.

*/


// ES6 Syntax:

var boxesNeeded = (bottles, boxCapacity) => {
    let boxesNeeded = bottles / boxCapacity;
    return boxesNeeded;
}

boxesNeeded(20, 5);
boxesNeeded(15, 7);
boxesNeeded(5, 10);

// ES5 Syntax:

function boxesNeeded(bottles, boxCapacity) {
    var boxesNeeded =  bottles / boxCapacity;
    console.log(boxesNeeded);
}

boxesNeeded(20, 5);
boxesNeeded(15, 7);
boxesNeeded(5, 10);