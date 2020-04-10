var images = document.getElementsByTagName('img'); 

/*var requestJS = new XMLHttpRequest();
var requestURL = 'emojis.json';
requestJS.open('GET', requestURL);
requestJS.responseType = 'json';
requestJS.send();

requestJS.onload = function() {
    var count = 0;
    for (var key in requestJS.response) {
        count++;
        data.innerHTML = requestJS.response['😓']

    }
    
}
*/

for (var i = 0, l = images.length; i < l; i++) {
    var data_new = images[i].src.replace(/https:\/\/fonts.gstatic.com\/s\/e\/notoemoji\/latest\/1f497\/emoji.svg/gi, 'heyy')
    images[i].src = 'hey'
}