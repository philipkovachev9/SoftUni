/* Create a database on firebase and retrieve the data from there. Also make sure
that the user can add new people to the phonebook and delete them
*/

const URL = 'https://test-app-8058c.firebaseio.com/phonebook/phonebook';
const TABLE = $('#phonebook');
const NAME = $('#person');
const PHONE = $('#phone');

$('#btnLoad').on('click', loadContacts);
$('#btnCreate').on('click', createContact)


function loadContacts() {
    $.ajax({
        method: 'GET',
        url: URL + '.json'
    }).then(appendContacts).catch(handleError)
}

function appendContacts(contacts) {
    TABLE.empty();
    for (const key in contacts) {
        let li = $('<li>');
        let button = $('<button>Delete</button>');
        button.on('click', function() {
            $.ajax({
                method: 'DELETE',
                url: URL + '/' + this.id + '.json'
            }). then(function() {
                li.remove();
            }).catch(handleError)
        })
        li.text(`Name: ${contacts[key].name}: Phone ${contacts[key].phone}`)
        li.append(button);
        TABLE.append(li);
    }
}

function createContact() {
    let name = NAME.val();
    let phone = PHONE.val();
    if (name.trim() !== '' && phone.trim() !== '') {
        $.ajax({
            method: 'POST',
            url: URL + '.json',
            data:JSON.stringify({name, phone})
        }).then(function (res) {
            console.log(res)
        }).catch(handleError)
    }
}

function handleError(error) {
    console.log(error);
}