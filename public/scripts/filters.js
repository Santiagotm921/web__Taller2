var filter = document.querySelector('.filter');
var btn = document.querySelector('.flexSearch__filter');
var order = document.querySelector('.order');
var btn2 = document.querySelector('.flexSearch__order');

var handleHamClick = function (event) {
    filter.classList.toggle('filter--flex');
    btn.classList.toggle('flexSearch__filter--active');
}

var handleHamClick2 = function (event) {
    order.classList.toggle('order--flex');
    btn2.classList.toggle('flexSearch__order--active');
}

btn.addEventListener('click', handleHamClick);
btn2.addEventListener('click', handleHamClick2);

function handleWindowResize(event) {
    if (window.innerWidth > 400) {
        filter.classList.remove('filter--flex');
        order.classList.remove('order--flex');
        btn.classList.remove('flexSearch__filter--active');
        btn2.classList.remove('flexSearch__order--active');
    }
}
window.addEventListener('resize', handleWindowResize);

