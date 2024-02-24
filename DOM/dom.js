var one = document.querySelector('h1');
one.style.color="blue"

var two = document.getElementById('two');
two.style.fontSize='50px';
two.style.fontFamily='sans-serif';
two.style.backgroundColor='grey';
two.style.letterSpacing='2px';
two.innerHTML='<i>I am italic</i>';


var img = document.querySelector('img');
img.style.height='200px'
img.style.borderRadius='30px'

var image = document.createElement('p');
document.querySelector('body').appendChild(image);
image.textContent='I am a paragraph';
image.style.fontSize='40px';