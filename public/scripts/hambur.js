var mainnav = document.querySelector('.mainnav');
var hambtn = document.querySelector('.hamburguerbtn');
var menu = document.querySelector('.menu__container');

var handleHamClick = function (event) {
    mainnav.classList.toggle('mainnav--mobile');
}

hambtn.addEventListener('click', handleHamClick);

function handleWindowResize(event) {
    if (window.innerWidth > 400) {
        mainnav.classList.remove('mainnav--mobile');
    }
}
window.addEventListener('resize', handleWindowResize);


window.addEventListener('scroll', event => {
    var y = window.scrollY
    if (y > 100) {
        menu.style.background = '#000000';
        menu.style.transition = '200ms'
    } else {
        menu.style.background = 'none';
    }
});
//console.log(y);


