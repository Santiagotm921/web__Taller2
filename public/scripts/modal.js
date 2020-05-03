var modal = document.querySelector('.modal');
var modalOpenWhite = document.querySelector('.buttons--white');
var modalOpenBlack = document.querySelector('.buttons--black');
var modalOpenYellow = document.querySelector('.buttons--yellow');
var modalOpenRose = document.querySelector('.buttons--rose');
var modalClose = document.querySelector('.modalclose');

modalOpenWhite.addEventListener('click', function () {

    modal.classList.add('modal--block');


    setTimeout(function () {
        modal.classList.add('modal--visible');
    }, 10);
});

modalOpenBlack.addEventListener('click', function () {

    modal.classList.add('modal--block');

    setTimeout(function () {
        // opacity 1
        modal.classList.add('modal--visible');
    }, 10);
});

modalOpenYellow.addEventListener('click', function () {

    modal.classList.add('modal--block');

    setTimeout(function () {
        // opacity 1
        modal.classList.add('modal--visible');
    }, 10);
});

modalOpenRose.addEventListener('click', function () {

    modal.classList.add('modal--block');

    setTimeout(function () {
        // opacity 1
        modal.classList.add('modal--visible');
    }, 10);
});

function closeModal() {

    modal.classList.remove('modal--visible');
    setTimeout(function () {
        modal.classList.remove('modal--block');
    }, 500);
}

modalClose.addEventListener('click', function () {
    closeModal();
});

modal.addEventListener('click', function (event) {
    if (event.target == modal) {
        closeModal();
    }
});