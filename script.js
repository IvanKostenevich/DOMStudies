
function timer() {
    var message = document.createElement('p');
    message.innerHTML = 'Hello, World!';
    document.querySelector('.shorttext').appendChild(message);
}

setTimeout(timer, 2000);




//////////////////////////////////////////////////////////////////////////////////
var buttonLess = document.querySelector('.less');
var buttonMore = document.querySelector('.more');



var originalText = document.querySelector('.longtext').innerText;

function cutText() {
    var textNode = document.querySelector('.longtext');
    var text = textNode.innerText;
    if (text.length > 500) {
        text = text.slice(0, 500);
        buttonLess.className = 'more';
        buttonMore.className = 'less';
    }
    textNode.innerText = text + '...';
}

function showText() {
    document.querySelector('.longtext').innerText = originalText;
    buttonLess.className = 'less';
    buttonMore.className = 'more';

}