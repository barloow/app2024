const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    name: String,
    address: String,
    phone: String,
    description: String,
    menu: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Menu' }],
});

const RestaurantModel = mongoose.model('Restaurant', RestaurantSchema);

module.exports = RestaurantModel;