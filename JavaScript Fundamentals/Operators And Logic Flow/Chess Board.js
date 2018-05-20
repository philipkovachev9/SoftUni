/*
Write a JS function to print a chessboard of size n X n. See the example for more information.
The input comes as a single number argument n.
The output should be returned as a result of your function in the form of a string.
*/

function generateChessBoard(size) {
    let result = '<div class="chessboard">\n';
    let color = 'black';
    for (i = 0; i < size; i++) {
        result += '<div>\n'
        for (j = 0; j < size; j++) {
            result += `<span class="${color}"></span>\n`
            color = (color === 'black') ? 'white' : "black"
        }
        result += '  </div>\n'
    }
    console.log(result + '</div>\n')
}

generateChessBoard(3);