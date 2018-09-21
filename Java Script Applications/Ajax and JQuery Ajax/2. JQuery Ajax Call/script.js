/*
Use jQuery to write a JS function that loads an online resource into a div with id &quot;text&quot;. Make a request to
&quot;text.html&quot; and replace the target div’s content with the returned HTML. Create the files ajax-load.html and
text.html and place them in the same folder, so that your script can find the latter.
*/

function loadTitle() {
   $('#text').load('./text.html')
}