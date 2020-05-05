const Product = require('../models/product.model');

// controllers/products.js
exports.product_create = function (req, res) {
    let product = new Product(
        {
            name: req.body.name,
            type: req.body.type,
            description: req.body.description,
            author: req.body.author,
            publisher: req.body.publisher,
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};

// exports.product_list = function (req, res){
//     Product.find({}, function (err, dataProduct) {
//         if(err) {
//             return next(err);
//         }
//         res.send({data: dataProduct});
//     })
// };
//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};