/* Your task is to write a JS function that loads a github repository asynchronously with AJAX. You should create an
instance of XmlHttpRequest an attach an onreadystatechange event to it. (An EventHandler that is called whenever
the readyState attribute changes). In your event handler when the readyState attribute reaches a value of 4 (it is
ready), replcae the text content of a div element with id  with the value of the responseText property of the
request. Do not format the response in any way. Submit your loadRepos function.
*/

function loadRepos() {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function() {
     if(request.readyState === 4 && request.status === 200) {
      document.getElementById('results').innerText = this.responseText;
     }
    }
    request.open('GET','https://api.github.com/users/philipkovachev9/repos');
    request.send();
}
