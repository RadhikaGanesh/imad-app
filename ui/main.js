console.log('Loaded!');
//edit content
var element= document.getElementById('main-text');
element.innerHTML='Hi! Radhika';
//move image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight() {
    margiLeft= MarginLeft + 10;
    img.style.marginleft= marginLeft + 'px';
}

img.onclick = function() {
    var interval = setInterval(moveRight,100);
    img.style.marginLeft='500px';
};
