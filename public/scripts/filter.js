var filter = document.querySelector('.filter');
var btn = document.querySelector('.flexSearch__filter');

var handleHamClick = function (event) {

    filter.classList.toggle('filter--flex');
}
btn.addEventListener('click', handleHamClick);

function handleWindowResize(event) {
    if (window.innerWidth > 400) {
        filter.classList.remove('filter--flex');
    }
}
window.addEventListener('resize', handleWindowResize);