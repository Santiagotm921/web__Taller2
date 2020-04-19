var mainnav = document.querySelector('.mainnav');
var hambtn = document.querySelector('.hamburguerbtn');

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