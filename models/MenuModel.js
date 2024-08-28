const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
    restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
    items: [{
      name: String,
      description: String,
      price: Number,
    }],
});

const MenuModel = mongoose.model('Menu', MenuSchema);

module.exports = {MenuModel};