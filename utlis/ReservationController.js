const Reservation = require('../models/ReservationModel');

// Get all reservations for the logged-in user
const getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find({ user: req.user.id }).populate('restaurant');
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reservations', error });
  }
};

// Add a new reservation
const addReservation = async ({body}, res) => {
  const { restaurant, date, time, numberOfPeople } = body;
  const reservation = new Reservation({
    user: req.user.id,
    restaurant,
    date,
    time,
    numberOfPeople,
  });

  try {
    await reservation.save();
    res.status(201).json({ message: 'Reservation added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding reservation', error });
  }
};

// Update a reservation
const updateReservation = async ({body}, res) => {
  const { id } = req.params;
  const updates = body;

  try {
    const reservation = await Reservation.findByIdAndUpdate(id, updates, { new: true });
    res.json(reservation);
  } catch (error) {
    res.status(500).json({ message: 'Error updating reservation', error });
  }
};

// Delete a reservation
const deleteReservation = async (req, res) => {
  const { id } = req.params;

  try {
    await Reservation.findByIdAndDelete(id);
    res.json({ message: 'Reservation deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting reservation', error });
  }
};

module.exports = {
  deleteReservation,
  updateReservation,
  addReservation,
  getAllReservations
};