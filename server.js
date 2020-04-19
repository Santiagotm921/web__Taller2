const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const listproducts = require('./public/scripts/listProducts');
const app = express();
app.engine('handlebars', exphbs()); //Todos los archivos handlebars, los va a renderizar usando exphbs
app.set('view engine', 'handlebars'); //usar el motor de render Handlebars

app.use(express.static('public')); //static hace que la carpeta public sea PUBLICA (NO QUITAR)

app.get('/', function (req, res) {
    var context = {
        listproducts: listproducts,
    }
    res.render('home', context);
});

//------------------------------------------------------------------------------------------
app.get('/product/:name', function (req, res) {

    if (req.params.name == 'Americana') {
        var context = {
            title: 'AMERICANA HI SHOE',
            subtitle: 'RETRO LOOK THAT HONORS THE LEGENDARY AMERICANA B-BALL SHOE',
            description: 'These streetwear shoes recall the look of the Americana, a legendary B-ball crusader from the 70s and 80s. The leather and textile upper gives a soft, supple feel. Theyre built for comfort with a padded collar and rubber cupsole.',
            img: '/images/Americana_Hi_Shoes_White_EF2803_01_standard.png'
        }
    }
    res.render('product', context);
});

/*app.get('/', function (req, res) {
    console.log('hola desde la consola');
    res.sendFile(path.join(__dirname, '/public/index.html'));
}); */

app.listen(3000, function () {
    console.log('servidor iniciado en puerto 3000');
});

