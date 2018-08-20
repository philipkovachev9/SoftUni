// Using the reduce function print the sum, min, max, product and the joined version of a recieved array

function aggregate(array) {
    console.log("Sum = " + array.reduce((a, b) => a + b));
    console.log("Min = " + array.reduce((a, b) => Math.min(a, b)));
    console.log("Max = " + array.reduce((a, b) => Math.max(a, b)));
    console.log("Product = " + array.reduce((a, b) => a * b));
    console.log("Joined = " + array.reduce((a, b) => '' + a + b));
}

aggregate([1, 2, 3])