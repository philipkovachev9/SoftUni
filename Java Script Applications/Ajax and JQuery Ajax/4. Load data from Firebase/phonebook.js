/* Create a database on firebase and retrieve the data from there. Also make sure
that the user can add new people to the phonebook and delete them
*/

const URL = 'https://test-app-8058c.firebaseio.com/phonebook/phonebook';
const TABLE = $('#phonebook');

$('#btnLoad').on('click', loadContacts);

function loadContacts() {
    $.ajax({
        method: 'GET',
        url: URL + '.json'
    }).then(appendContacts).catch(handleError)
}

function appendContacts(contacts) {
    for (const key in contacts) {
      let li = $(`<li>Name: ${contacts[key].name}: Phone ${contacts[key].phone} </li>`)
      TABLE.append(li);
    }
}

function handleError(error) {
    console.log(error);
}