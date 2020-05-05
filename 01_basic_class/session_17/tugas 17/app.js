//app.js
const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/product.route'); // Imports routes for the products
const mongoose = require ('mongoose')
const app = express();

//setup mongoose connection
const urlDB = 'mongodb://localhost:27017/test?readPreference=primary&appname=MongoDB%20Compass&ssl=false'
const mongoDBurl = urlDB;
mongoose.connect(mongoDBurl);
mongoose.Promise = global.Promise;
const connection = mongoose.connection;
connection.on('error',console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

let port = 5000;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});