function attachEvents() {
    //TO DO: Fix the posts places- they are switched!
    const URL = 'https://baas.kinvey.com/appdata/kid_Sy8W2Z0Y7';
    const USERNAME = 'Peter';
    const PASSWORD = 'p';
    const BASE_64 = btoa(USERNAME + ':' + PASSWORD);
    const AUTH = {"Authorization":'Basic ' + BASE_64};
    const SELECT = $('#posts');
    const BODY = $('#post-body');

    $('#btnLoadPosts').on('click', loadPosts);
    $('#btnViewPost').on('click', showPosts);

    function loadPosts() {
        $.ajax({
            method: 'GET',
            url: URL + '/posts',
            headers: AUTH
        }).then(function(response) {
            for(post of response) {
              SELECT.append(`<option body="${post.body}">${post.title}</option>`);
            }
        }).catch(function(error) {
            console.log(error);
        })
    }

    function showPosts() {
        BODY.empty();
        let selectedElement =  SELECT.find(':selected');
        let value = selectedElement.text();
        let body = selectedElement.attr('body');
        BODY.append($(`<li>${body}</li>`));
    }

    $.ajax({
        method: 'GET',
        url: URL + '/comments',
        headers: AUTH
    }).then(function(response) {
        console.log(response)

    })
}

attachEvents();
