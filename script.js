function timer() {
    var message = document.createElement('p');
    message.innerHTML = 'Hello, World!';
    document.querySelector('.shorttext').appendChild(message);
}

setTimeout(timer, 2000);




//////////////////////////////////////////////////////////////////////////////////
var buttonLess = document.querySelector('.less');
var buttonMore = document.querySelector('.more');



var originalText = document.querySelector('.longtext').innerHTML;

function cutText() {
    var textNode = document.querySelector('.longtext');
    var text = textNode.innerHTML;
    if (text.length > 500) {
        text = text.slice(0, 500);
        buttonLess.style.display = 'none';
        buttonMore.style.display = 'inline-block';
    }
    textNode.innerHTML = text + '...';
}

function showText() {
    document.querySelector('.longtext').innerHTML = originalText;
    buttonLess.style.display = 'inline-block';
    buttonMore.style.display = 'none';

}