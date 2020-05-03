//Colors
var black = "#000"
var red = "#aa0400";
var white = "#fff";
var yellow = "#f9be24";
var rose = "#fc0085";
var none = "none";
var flex = "flex";

var breackpoint = 930;
var ancho = window.innerWidth;

//Buttons
var btnRed = document.querySelector('.buttons--red');
var btnWhite = document.querySelector('.buttons--white');
var btnBlack = document.querySelector('.buttons--black');
var btnYellow = document.querySelector('.buttons--yellow');
var btnRose = document.querySelector('.buttons--rose');
//Buttons

//shoes
var myShoe = document.querySelector('.bannershoe__myshoe');
var myShoeWhite = document.querySelector('.bannershoe__myshoe--white');
var myShoeBlack = document.querySelector('.bannershoe__myshoe--black');
var myShoeYellow = document.querySelector('.bannershoe__myshoe--yellow');
var myShoeRose = document.querySelector('.bannershoe__myshoe--rose');

var char = document.querySelector('.characteristics__shoe');
var charBlack = document.querySelector('.characteristics__shoe--black');
var charWhite = document.querySelector('.characteristics__shoe--white');
var charRose = document.querySelector('.characteristics__shoe--rose');
var charYellow = document.querySelector('.characteristics__shoe--yellow');

//Class
var principal = document.querySelector('.menu2');
var principalBlack = document.querySelector('.menu2--black');
var principalWhite = document.querySelector('.menu2--white');

var characteristics = document.querySelector('.characteristics');
var characteristicsBlack = document.querySelector('.characteristics--black');
var characteristicsWhite = document.querySelector('.characteristics--white');

var hamburguer = document.querySelector('.mainnav');
var hamburguerWhite = document.querySelector('.mainnav--white');

var bannerTexts = document.querySelector('.bannershoe__texts');
var bannerTextsWhite = document.querySelector('.bannershoe__texts--white');

var btnGiant = document.querySelector('.bannershoe__button');
var btnGiantWhite = document.querySelector('.bannershoe__button--white');

var publiTexts = document.querySelectorAll('.publicity__text');
var publiTextsBlack = document.querySelectorAll('.publicity__text--black');
var publiTextsYellow = document.querySelectorAll('.publicity__text--yellow');
var publiTextsRose = document.querySelectorAll('.publicity__text--rose');

var menu = document.querySelector('.menu__container');
var menuBlack = document.querySelector('.menu__container--black');
var menuWhite = document.querySelector('.menu__container--white');

var changeColor = document.querySelector('.changeColor');
var changeColorBlack = document.querySelector('.changeColor--black');

var publiShoes = document.querySelectorAll('.publicity__shoe');
var publiShoesBlack = document.querySelectorAll('.publicity__shoe--black');
var publiShoesWhite = document.querySelectorAll('.publicity__shoe--white');
var publiShoesYellow = document.querySelectorAll('.publicity__shoe--yellow');
var publiShoesRose = document.querySelectorAll('.publicity__shoe--rose');

var register = document.querySelector('.register');
var registerBlack = document.querySelector('.register--black');
var registerWhite = document.querySelector('.register--white');

var shoeColors = document.querySelector('.changeColor__shoe');
var shoeColorsWhite = document.querySelector('.changeColor__shoe--white');
var shoeColorsBlack = document.querySelector('.changeColor__shoe--black');
var shoeColorsYellow = document.querySelector('.changeColor__shoe--yellow');
var shoeColorsRose = document.querySelector('.changeColor__shoe--rose');


var handleBlack = function () {

    menu.classList.add('menu__container--black');
    characteristics.classList.add('characteristics--black');
    changeColor.classList.add('changeColor--black');
    principal.classList.add('menu2--black');
    register.classList.add('register--black');
    shoeColors.classList.add('changeColor__shoe--black');
    myShoe.classList.add('bannershoe__myshoe--black');
    char.classList.add('characteristics__shoe--black');
    shoeColorsBlack.style.display = flex;
    myShoeBlack.style.display = flex;
    charBlack.style.display = flex;

    for (let i = 0; i < publiShoes.length; i++) {
        const shoe = publiShoes[i];
        shoe.classList.add('publicity__shoe--black');
    }

    for (let i = 0; i < publiTexts.length; i++) {
        const textsShoes = publiTexts[i];
        textsShoes.classList.add('publicity__shoe--black');
    }

    if (shoeColorsBlack.style.display = flex) {
        shoeColors.style.display = none;
        shoeColorsWhite.style.display = none;
        shoeColorsYellow.style.display = none;
        shoeColorsRose.style.display = none;
    }

    if (myShoeBlack.style.display = flex) {
        myShoe.style.display = none;
        myShoeWhite.style.display = none;
        myShoeYellow.style.display = none;
        myShoeRose.style.display = none;
    }

    if (charBlack.style.display = flex) {
        char.style.display = none;
        charWhite.style.display = none;
        charRose.style.display = none;
        charYellow.style.display = none;
    }

    removeWhite();
    removeYellow();
    removeRose();
}

var handleWhite = function () {

    register.classList.add('register--white');
    principal.classList.add('menu2--white');
    characteristics.classList.add('characteristics--white');
    hamburguer.classList.add('mainnav--white')
    bannerTexts.classList.add('bannershoe__texts--white');
    btnGiant.classList.add('bannershoe__button--white');
    menu.classList.add('menu__container--white');
    shoeColors.classList.add('changeColor__shoe--white');
    myShoe.classList.add('bannershoe__myshoe--white');
    char.classList.add('characteristics__shoe--white');
    shoeColorsWhite.style.display = flex;
    myShoeWhite.style.display = flex;
    charWhite.style.display = flex;

    for (let i = 0; i < publiShoes.length; i++) {
        const shoe = publiShoes[i];
        shoe.classList.add('publicity__shoe--white');
    }

    if (shoeColorsWhite.style.display = flex) {
        shoeColors.style.display = none;
        shoeColorsBlack.style.display = none;
        shoeColorsYellow.style.display = none;
        shoeColorsRose.style.display = none;
    }

    if (myShoeWhite.style.display = flex) {
        myShoe.style.display = none;
        myShoeBlack.style.display = none;
        myShoeYellow.style.display = none;
        myShoeRose.style.display = none;
    }

    if (charWhite.style.display = flex) {
        char.style.display = none;
        charBlack.style.display = none;
        charRose.style.display = none;
        charYellow.style.display = none;
    }

    removeBlack();
    removeYellow();
    removeRose();

}

var handleYellow = function () {

    shoeColors.classList.add('changeColor__shoe--yellow');
    myShoe.classList.add('bannershoe__myshoe--yellow');
    char.classList.add('characteristics__shoe--yellow');
    register.classList.add('register--yellow');
    principal.classList.add('menu2--yellow');
    characteristics.classList.add('characteristics--yellow');
    hamburguer.classList.add('mainnav--yellow')
    bannerTexts.classList.add('bannershoe__texts--white');
    menu.classList.add('menu__container--yellow');
    myShoeYellow.style.display = flex;
    charYellow.style.display = flex;
    shoeColorsYellow.style.display = flex;

    for (let i = 0; i < publiTexts.length; i++) {
        const textsShoes = publiTexts[i];
        textsShoes.classList.add('publicity__text--yellow');
    }

    if (shoeColorsYellow.style.display = flex) {
        shoeColors.style.display = none;
        shoeColorsBlack.style.display = none;
        shoeColorsWhite.style.display = none;
        shoeColorsRose.style.display = none;
    }

    if (myShoeYellow.style.display = flex) {
        myShoe.style.display = none;
        myShoeWhite.style.display = none;
        myShoeBlack.style.display = none;
        myShoeRose.style.display = none;
    }

    if (charYellow.style.display = flex) {
        char.style.display = none;
        charBlack.style.display = none;
        charRose.style.display = none;
        charWhite.style.display = none;
    }

    removeBlack();
    removeWhite();
    removeRose();

}

var handleRose = function () {

    shoeColors.classList.add('changeColor__shoe--rose');
    register.classList.add('register--rose');
    principal.classList.add('menu2--rose');
    characteristics.classList.add('characteristics--rose');
    hamburguer.classList.add('mainnav--rose')
    bannerTexts.classList.add('bannershoe__texts--white');
    menu.classList.add('menu__container--rose');
    myShoe.classList.add('bannershoe__myshoe--rose');
    char.classList.add('characteristics__shoe--rose');
    shoeColorsRose.style.display = flex;
    myShoeRose.style.display = flex;
    charRose.style.display = flex;

    if (shoeColorsRose.style.display = flex) {
        shoeColors.style.display = none;
        shoeColorsBlack.style.display = none;
        shoeColorsWhite.style.display = none;
        shoeColorsYellow.style.display = none;
    }

    if (myShoeRose.style.display = flex) {
        myShoe.style.display = none;
        myShoeWhite.style.display = none;
        myShoeYellow.style.display = none;
        myShoeBlack.style.display = none;
    }

    if (charRose.style.display = flex) {
        char.style.display = none;
        charBlack.style.display = none;
        charWhite.style.display = none;
        charYellow.style.display = none;
    }

    for (let i = 0; i < publiTexts.length; i++) {
        const textsShoes = publiTexts[i];
        textsShoes.classList.add('publicity__text--rose');
    }

    removeBlack();
    removeWhite();
    removeYellow();

}

var handleRed = function () {

    if (shoeColors.style.display = flex) {
        shoeColorsBlack.style.display = none;
        shoeColorsWhite.style.display = none;
        shoeColorsYellow.style.display = none;
        shoeColorsRose.style.display = none;
    }

    if (myShoe.style.display = flex) {
        myShoeBlack.style.display = none;
        myShoeWhite.style.display = none;
        myShoeYellow.style.display = none;
        myShoeRose.style.display = none;
    }

    if (char.style.display = flex) {
        charYellow.style.display = none;
        charBlack.style.display = none;
        charRose.style.display = none;
        charWhite.style.display = none;
    }

    removeBlack();
    removeWhite();
    removeYellow();
    removeRose();
}

var removeBlack = function () {

    menu.classList.remove('menu__container--black');
    characteristics.classList.remove('characteristics--black');
    changeColor.classList.remove('changeColor--black');
    principal.classList.remove('menu2--black');
    register.classList.remove('register--black');
    shoeColors.classList.remove('changeColor__shoe--black');
    char.classList.remove('characteristics__shoe--black');

    for (let i = 0; i < publiTexts.length; i++) {
        const textsShoes = publiTexts[i];
        textsShoes.classList.remove('publicity__shoe--black');
    }

    for (let i = 0; i < publiShoes.length; i++) {
        const shoe = publiShoes[i];
        shoe.classList.remove('publicity__shoe--black');
    }
}

var removeWhite = function () {

    register.classList.remove('register--white');
    principal.classList.remove('menu2--white');
    characteristics.classList.remove('characteristics--white');
    hamburguer.classList.remove('mainnav--white')
    bannerTexts.classList.remove('bannershoe__texts--white');
    btnGiant.classList.remove('bannershoe__button--white');
    menu.classList.remove('menu__container--white');
    shoeColors.classList.remove('changeColor__shoe--white');
    char.classList.remove('characteristics__shoe--white');

    for (let i = 0; i < publiShoes.length; i++) {
        const shoe = publiShoes[i];
        shoe.classList.remove('publicity__shoe--white');
    }
}

var removeYellow = function () {

    register.classList.remove('register--yellow');
    principal.classList.remove('menu2--yellow');
    characteristics.classList.remove('characteristics--yellow');
    hamburguer.classList.remove('mainnav--yellow')
    bannerTexts.classList.remove('bannershoe__texts--yellow');
    btnGiant.classList.remove('bannershoe__button--yellow');
    menu.classList.remove('menu__container--yellow');
    shoeColors.classList.remove('changeColor__shoe--yellow');
    char.classList.remove('characteristics__shoe--yellow');

    for (let i = 0; i < publiTexts.length; i++) {
        const textsShoes = publiTexts[i];
        textsShoes.classList.remove('publicity__text--yellow');
    }
}

var removeRose = function () {

    register.classList.remove('register--rose');
    principal.classList.remove('menu2--rose');
    characteristics.classList.remove('characteristics--rose');
    hamburguer.classList.remove('mainnav--rose')
    bannerTexts.classList.remove('bannershoe__texts--rose');
    btnGiant.classList.remove('bannershoe__button--rose');
    menu.classList.remove('menu__container--rose');
    shoeColors.classList.remove('changeColor__shoe--rose');
    char.classList.remove('characteristics__shoe--rose');

    for (let i = 0; i < publiTexts.length; i++) {
        const textsShoes = publiTexts[i];
        textsShoes.classList.remove('publicity__text--rose');
    }
}

btnYellow.addEventListener('click', handleYellow);
btnRed.addEventListener('click', handleRed);
btnBlack.addEventListener('click', handleBlack);
btnWhite.addEventListener('click', handleWhite);
btnRose.addEventListener('click', handleRose);


