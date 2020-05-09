var athletic = document.querySelector('.filter__athletics');
var cleats = document.querySelector('.filter__cleats');
var boots = document.querySelector('.filter__boots');
var hightops = document.querySelector('.filter__hightops');
var men = document.querySelector('.filter__men');
var women = document.querySelector('.filter__women');
var red = document.querySelector('.filter__colors--red');
var white = document.querySelector('.filter__colors--white');
var black = document.querySelector('.filter__colors--black');
var yellow = document.querySelector('.filter__colors--yellow');
var orange = document.querySelector('.filter__colors--orange');
var blue = document.querySelector('.filter__colors--blue');
var rose = document.querySelector('.filter__colors--rose');
var brown = document.querySelector('.filter__colors--brown');

//ORDER
var low = document.querySelector('.order__low');
var high = document.querySelector('.order__high');
var rating = document.querySelector('.order__rating');
var ne = document.querySelector('.order__new');

athletic.addEventListener('click', function (event) {
    var url = location.pathname;
    url = url + '?type_=' + 'Athletics';
    location.href = url;
});

cleats.addEventListener('click', function (event) {
    var url = location.pathname;
    url = url + '?type_=' + 'Cleats';
    location.href = url;
});

boots.addEventListener('click', function (event) {
    var url = location.pathname;
    url = url + '?type_=' + 'Boots';
    location.href = url;
});

hightops.addEventListener('click', function (event) {
    var url = location.pathname;
    url = url + '?type_=' + 'Hightops';
    location.href = url;
});

men.addEventListener('click', function (event) {
    var url = location.pathname;
    url = url + '?gender_=' + ['men'];
    location.href = url;
});

women.addEventListener('click', function (event) {
    var url = location.pathname;
    url = url + '?gender_=' + ['women'];
    location.href = url;
});

red.addEventListener('click', function (event) {
    var url = location.pathname;
    url = url + '?color_=' + 'red';
    location.href = url;
});

white.addEventListener('click', function (event) {
    var url = location.pathname;
    url = url + '?color_=' + 'white';
    location.href = url;
});

black.addEventListener('click', function (event) {
    var url = location.pathname;
    url = url + '?color_=' + 'black';
    location.href = url;
});

yellow.addEventListener('click', function (event) {
    var url = location.pathname;
    url = url + '?color_=' + 'yellow';
    location.href = url;
});

orange.addEventListener('click', function (event) {
    var url = location.pathname;
    url = url + '?color_=' + 'orange';
    location.href = url;
});

blue.addEventListener('click', function (event) {
    var url = location.pathname;
    url = url + '?color_=' + 'blue';
    location.href = url;
});

rose.addEventListener('click', function (event) {
    var url = location.pathname;
    url = url + '?color_=' + 'rose';
    location.href = url;
});

brown.addEventListener('click', function (event) {
    var url = location.pathname;
    url = url + '?color_=' + 'brown';
    location.href = url;
});

//ORDER 
low.addEventListener('click', function (event) {
    var url = location.pathname;
    url = url + '?sort=price_desc';
    location.href = url;
});

high.addEventListener('click', function (event) {
    var url = location.pathname;
    url = url + '?sort=price_asc';
    location.href = url;
});

rating.addEventListener('click', function (event) {
    var url = location.pathname;
    url = url + '?sort=rating';
    location.href = url;
});

ne.addEventListener('click', function (event) {
    var url = location.pathname;
    url = url + '?sort=ne';
    location.href = url;
});