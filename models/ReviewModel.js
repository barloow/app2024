const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
    rating: Number,
    comment: String,
});

const ReviewModel = mongoose.model('Review', ReviewSchema);

module.exports = ReviewModel;