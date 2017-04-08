/**
Excluding OP's post, script will hide posts 
containing words matching the below words array.

David Metcalfe, April 7 2017
*/

var words = ['cuck', 'autis', 'nig', 'rape', 'gay'];

// every 200 milliseconds, re-run to remove any new matching comments.
setInterval(function() {
var posts = document.getElementsByClassName("postMessage");

var regFind = function(string, arr) {
    for (var i = 0; i < arr.length; i++) {
        var re = new RegExp(arr[i], "gi");
        if (re.test(string)) {
            return true;
        }
        else {
            continue;
        }
    }
};

for (var i = 0; i < posts.length; i++)
{
    var stripPunctuation = posts[i].innerText.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?\"<>]/g," ");
    stripPunctuation = stripPunctuation.replace(/\n/g," ");
    stripPunctuation = stripPunctuation.replace(/ +(?= )/g,'');
    stripPunctuation = stripPunctuation.toLowerCase();

    if (regFind(stripPunctuation, words))
    {
        // Traverses back up to parent: "postContainer"
        posts[i].parentNode.parentNode.remove();
    }
}
}, 200);
