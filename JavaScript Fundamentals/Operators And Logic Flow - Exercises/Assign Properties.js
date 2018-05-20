/*Assign Properties
Write a JS function that composes an object by given properties. There will be 3 sets of property-value pairs (a total
of 6 elements). Assign each value to its respective property of an object and return the object as a result of the
function.
The input comes as an array of string elements.
The output should be returned as a value.
*/


// Solution #1

function toObject(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++)
        obj[i] = arr[i];
    return obj;
}
toObject(['name', 'Pesho', 'age', '23', 'gender', 'male']);

// Solution #2

function toObject1(arr) {
    let obj = Object.assign({}, ['name', 'Pesho', 'age', '23', 'gender', 'male']);

    return obj;
}