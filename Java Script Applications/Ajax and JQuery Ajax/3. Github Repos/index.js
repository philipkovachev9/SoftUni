/*
Your task is to write a JS function that executes an AJAX request with jQuery and loads all user github repositories
by a given username (taken from input field with id &quot;username&quot;) into a list (each repository as a list-item) with id
&quot;repos&quot;. Use the properties full_name and html_url of the returned objects to create a link to each repo’s
GitHub page. If an error occurs (like 404 “Not Found”), append to the list a list-item with text &quot;Error&quot; instead. Clear
the contents of the list before any new content is appended. See the highlighted lines of the skeleton for formatting
details of each list item. Submit your loadRepos function.
*/

function loadRepos() {
    let userName = $('#username').val();
    let url = `https://api.github.com/users/${userName}/repos`;
    $.ajax({
        method: 'GET',
        success: successRepos,
        error: handleError
    })

    function successRepos(res) {
    
        for(const repo of res) {
           let li = $(`<li><a href="${repo.html_url}">${repo.full_name}</a></li>`);
           $('#repos').append(li);
        }
    }

    function handleError(err) {
        console.log(err);

    }
}