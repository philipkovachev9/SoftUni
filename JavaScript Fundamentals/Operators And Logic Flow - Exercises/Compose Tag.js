/*
Write a JS function that composes an HTML image tag.
The input comes as an array of string elements. The first element is the location of the file and the second is the
alternate text.
The output should be printed to the console in the following format:
&lt;img src=&quot;{file location}&quot; alt=&quot;{alternate text}&quot;&gt;
*/

function composeTag(input) {
    return `<img src="${input[0]}" alt="${input[1]}"`;

}

composeTag(['smiley.gif', 'Smiley Face']);