var athletic = document.querySelector('.filter__athletics');
var cleats = document.querySelector('.filter__cleats');
var boots = document.querySelector('.filter__boots');
var hightops = document.querySelector('.filter__hightops');

athletic.addEventListener('click', function(event) {
    var url = location.pathname;
    url = url + '?type_=' + 'Athletics';
    location.href = url;
});

cleats.addEventListener('click', function(event) {
    var url = location.pathname;
    url = url + '?type_=' + 'Cleats';
    location.href = url;
});

boots.addEventListener('click', function(event) {
    var url = location.pathname;
    url = url + '?type_=' + 'Boots';
    location.href = url;
});

hightops.addEventListener('click', function(event) {
    var url = location.pathname;
    url = url + '?type_=' + 'Hightops';
    location.href = url;
});