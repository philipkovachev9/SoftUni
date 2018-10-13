//
/*
Sub Sum

Write a JS function to sum a range of numeric elements from array. The function takes three parameters – the first is an array, the second is start index and the third is an end index. Both indexes are inclusive. Assume array elements may not be of type Number and cast everything. Implement the following error handling:

if the first element is not an array, return NaN

if the start index is less than zero, assume it is zero

if the end index is outside the bounds of the array, assume it points to the last index of the array

Input / Output

Your function must take three parameters. As output, return the resulting sum as instructed.

Examples

Sample Input

Sample Output

subsum([10, 20, 30, 40, 50, 60], 3, 300)

150

subsum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1)

3.3

subsum([10, &#39;twenty&#39;, 30, 40], 0, 2)

NaN

subsum([], 1, 2)

0

subsum(&#39;text&#39;, 0, 2)

NaN
*/

function subsum(array, start, end) {
    if (!Array.isArray(array)) {
        return NaN;
    }
    if (start < 0) {
        start = 0;
    }
    if (end > array.length - 1) {
        end = array.length - 1;
    }
    var sum = 0;
    for (let i = start; i <= end; i++) {
        sum += Number(array[i]);
    }
    return sum
}

console.log(subsum([10, 20, 30, 40, 50, 60], 3, 300));


