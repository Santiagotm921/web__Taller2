function onLoad() {

    var buttons = document.querySelectorAll('.screen__btn');

    var cartBtn = document.querySelector('.cart__btn');
    var carrito = document.querySelector('.menu__mycart')

    var cartList = [];

    // cuando se inicia la página actualizamos el número del carrito
    if (localStorage.getItem('cartList')) {
        cartList = JSON.parse(localStorage.getItem('cartList'));
    }
    cartBtn.innerText = cartList.length;


    function renderCart() {

        var total = 0;

        var cartContainer = document.querySelector('.cart__list');
        cartContainer.innerHTML = '';
        cartList.forEach(function (obj, index) {
            var newItem = document.createElement('div');
            newItem.classList.add('cart__item');
            newItem.innerHTML = `
            
            <div class="cart__item__theshoe"> 
                <img class="cart__item__shoe" src="${obj.img}" />
            </div>
            <div class="cart__item__span">
                <h1>` + obj.name + `</h1>
                <span class="cart__item__price"> 
                    <h3> ${ obj.price} $</h3>
                    <img class="cart__item__rating" src="${obj.imgrating}"/>
                </span>
          </div>
          <button class="cart__item__btn"><h1>X</h1></button>
        `;
            var btn = newItem.querySelector('button');
            btn.addEventListener('click', function () {
                cartList.splice(index, 1); // elimina el elemento en la lista (en memoria)
                cartBtn.innerText = cartList.length; // actualiza el número del carrito
                localStorage.setItem('cartList', JSON.stringify(cartList)); // actualiza la lista en localStorage (en HD)
                renderCart(); // volver a renderizar la lista
            });
            cartContainer.appendChild(newItem);
            total += parseInt(obj.price);
        });

        var totalElem = document.querySelector('.cart__total');
        totalElem.innerText = total;
    }
    cartBtn.addEventListener('click', renderCart);
    //renderCart();


    // agregar event listener para poner nuevos productos en el carrito
    buttons.forEach(function (elem) {
        elem.addEventListener('click', function () {
            var name = elem.getAttribute('data-name');
            var price = elem.getAttribute('data-price');
            var imgrating = elem.getAttribute('data-rating');
            var img = elem.getAttribute('data-img');
            var id = elem.getAttribute('data-id');

            cartList.push({
                name: name,
                price: parseInt(price),
                imgrating: imgrating,
                img: img,
                id: id
            });
            cartBtn.innerText = cartList.length;

            localStorage.setItem('cartList', JSON.stringify(cartList));

            renderCart();
        });
    });
}

window.addEventListener('load', onLoad);