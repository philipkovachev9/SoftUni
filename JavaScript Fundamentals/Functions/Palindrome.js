/*
Write a JS function that checks if an input string is a palindrome.
The input comes as a single string argument.
The output is the return value of your function. It should be true if the string is a palindrome and false if it’s not.
*/

// Solution #1:

function palindrome(word) {
    let reversed = word.split("").reverse().join("");
    if (word === reversed) {
        return true;
    } else {
        return false;
    }
}

//Solution #2:

function isPalindrome(word) {
    for (i = 0; i < word.length; i++) {
        if (word[i] !== word[word.length - 1 - i]) {
            return false;
        }
    }
    return true;
}