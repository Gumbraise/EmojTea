var images = document.getElementsByTagName('img'); 

for (var i = 0, l = images.length; i < l; i++) {
    var word = images[i].src.split('/')
    if (word[2] == "fonts.gstatic.com") {
        images[i].src = 'https://raw.githubusercontent.com/iamcal/emoji-data/master/img-apple-64/'+word[7]+'.png'
    }
}