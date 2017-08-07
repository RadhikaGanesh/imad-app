console.log('Loaded!');
//edit content
var element= document.getElementById('main-text');
element.innerHTML='Hi! Radhika';
//move image
var img = document.getElementById('madi');

img.onclick = function() {
    img.style.marginLeft='200px';
};
