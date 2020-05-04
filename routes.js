const assert = require('assert');
const ObjectId = require('mongodb').ObjectId;

function configureRoutes(app, db) {


    app.get('/product/:name/:id', function (req, res) {

        const filter = {
            _id: {
                $eq: new ObjectId(req.params.id)
            }
        };

        const collection = db.collection('products');
        collection.find(filter).toArray(function (err, docs) {
            assert.equal(err, null);

            if (docs.length == 0) {
                res.redirect('/404');
            }
            var context = docs[0];
            res.render('product', context);
        });
    });

    app.get('/', function (req, res) {
        console.log(req.query.type_)

        var filters = {
            $and: []
        };

        if (req.query.type_) {
            filters.$and.push({
                type: {
                    $eq: (req.query.type_)
                }
            });
        }

        if (filters.$and.length === 0) {
            delete filters.$and;
        }

        const collection = db.collection('products');
        collection.find(filters).toArray(function (err, docs) {
            assert.equal(err, null);

            var context = {
                products: docs
            }

            res.render('home', context);

        });

    });

    app.listen(3000, function () {
        console.log('servidor iniciado en puerto 3000');
    });

    app.get('/index.handlebars', function (req, res) {
        const collection = db.collection('index');
        collection.find().toArray(function (err, docs) {
            assert.equal(err, null);

            var context = {
                products: docs
            }

            res.render('index', context);

        });

    });
}

module.exports = configureRoutes;

