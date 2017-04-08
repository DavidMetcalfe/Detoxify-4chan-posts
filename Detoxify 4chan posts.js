/**
Excluding OP's post, script will hide posts 
containing words matching the below words array.

David Metcalfe, April 7 2017
*/

var posts = document.getElementsByClassName("postMessage");
var words = ['cuck', 'autis', 'nig', 'rape', 'gay'];

var regFind = function(string, arr) {
    for (var i = 0; i < arr.length; i++) {
        var re = new RegExp(arr[i], "gi");
        return re.test(string);
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