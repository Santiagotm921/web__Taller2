var typeInput = document.querySelector('[name=payment_type]')
var buttons = document.querySelectorAll('.btngroup__item');
buttons.forEach(function (btn) {
    btn.addEventListener('click', function (ev) {
        typeInput.value = ev.target.innerText;
        console.log('funcionando', ev.target.innerText);
    });
});
