const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    name: {type: String},
    type: {type: Number},
    description: {type: String},
    author: {type: String},
    publisher: {type: String}
});


// Export the model
module.exports = mongoose.model('Product', ProductSchema);