const SUBMIT = $('#submit');
const RESULTS = $('#result');
const URL = 'https://judgetests.firebaseio.com/businfo/1308.json';

SUBMIT.on('click', getInfo());

function getInfo() {
    $.ajax({
        method: 'GET',
        url: URL + '.json'
    }).then(showStuff)
}

function showStuff(req) {
    console.log(req)
}