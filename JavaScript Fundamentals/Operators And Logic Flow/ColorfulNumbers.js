/*
9. Colorful Numbers
Write a JS function to print the numbers from 1 to n. Return a string holding HTML list with the odd lines in blue and
even lines in green. See the example for more information.
The input comes as a single number argument n.
The output should be returned as a result of your function in the form of a string.
*/

function colorfulNumbers(n) {
    let result = '<ul>\n';
    let color = (i % 2 === 0) ? 'blue' : 'green';
    for (i = 1; i <= n; i++) {
        result += `  <li><span style ='color:${color}'>${i} </span> </li>\n`

    }
    console.log(result += '<ul>')
}


colorfulNumbers(10);