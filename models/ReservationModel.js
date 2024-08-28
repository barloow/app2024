const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
    date: Date,
    time: String,
    numberOfPeople: Number,
});

const ReservationModel = mongoose.model('Reservation', ReservationSchema);

module.exports = ReservationModel;