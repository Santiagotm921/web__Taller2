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


app.get('/product/:name/:id', function (req, res) {

    var id = parseInt(req.params.id);
    var product = listproducts[id];
    res.render('product', product);
});

app.listen(3000, function () {
    console.log('servidor iniciado en puerto 3000');
});

/*app.get('/', function (req, res) {
    console.log('hola desde la consola');
    res.sendFile(path.join(__dirname, '/public/index.html'));
}); */

