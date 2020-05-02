const assert = require('assert');
const ObjectId = require('mongodb').ObjectId;

function configureRoutes(app, db) {


    app.get('/product/:name/:id', function (req, res) {

        const filter = {
            _id: {
                $eq: new ObjectId(req.params.id)
            }
        }
  // Get the documents collection
        const collection = db.collection('products');
        // Find some documents
        collection.find(filter).toArray(function (err, docs) {
            assert.equal(err, null);

            if (docs.length == 0) {
                res.redirect('/404');
            }

            // crear el contexto
            var context = docs[0];
            // renderizar el archivo list.handlebars con el contexto creado
            res.render('product', context);
        });
    });



    app.get('/', function (req, res) {

        const collection = db.collection('products');
        collection.find({}).toArray(function (err, docs) {
            assert.equal(err, null);
            console.log(docs);

            var context = {
                products: docs
            }

            res.render('home', context);

        });
    });

    app.listen(3000, function () {
        console.log('servidor iniciado en puerto 3000');
    });

    /*app.get('/', function (req, res) {
        console.log('hola desde la consola');
        res.sendFile(path.join(__dirname, '/public/index.html'));
    }); */
}

module.exports = configureRoutes;

