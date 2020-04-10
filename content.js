var button = document.getElementsByTagName('button')[0]

var images = document.getElementsByTagName('img'); 
  
window.onload = updateEmoji()

function updateEmoji() {
    browser.tabs.executeScript({
        file: "replace.js"
    });
}
 
function handleUpdated() {
    updateEmoji()
}

browser.tabs.onUpdated.addListener(handleUpdated);

window.addEventListener('load', function () {
    gBrowser.addEventListener('DOMContentLoaded', function () {
        updateEmoji()
    }, false);
}, false);