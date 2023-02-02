// 'js/mian.js'

var slider_img = document.querySelector('.slider-img');
var img = ['dep01_bravusburger_.jpg', 'dep01_bravusburger_.jpg', 'dep02_tchecken.jpeg', 'dep03_viva.livremente.jpeg'];
var i = 0;

function prev() {
    if (i <= 0) i = img.length;
    i--;
    return setImg();
}

function next() {
    if (i >= img.length - 1) i = -1;
    i++;
    return setImg();
}

function setImg() {
    return slider_img.setAttribute('src', "img/" + img[i]);

}