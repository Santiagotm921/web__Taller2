var btnRight = document.querySelector('.slider__btn--right');
var btnLeft = document.querySelector('.slider__btn--left');
var strip = document.querySelector('.slides__mask');
var slider = document.querySelector('.slides');
var posX = 0;
var width = slider.offsetWidth;

function handleBtnNextClick() {
    // translate
    var quantity = strip.children.length;
    if (posX > -width * (quantity - 1)) {
        posX -= width;
    } else {
        posX = 0;
    }
    strip.style.transform = 'translate(' + posX + 'px, 0px)';
}
btnRight.addEventListener('click', handleBtnNextClick);

function handleBtnPrevClick() {
    // translate
    var quantity = strip.children.length;
    if (posX < 0) {
        posX += width;
    } else {
        posX = -width * (quantity - 1);
    }
    strip.style.transform = 'translate(' + posX + 'px, 0px)';
}
btnLeft.addEventListener('click', handleBtnPrevClick);