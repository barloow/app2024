const express = require('express');
const {getAllReservations, addReservation, updateReservation, deleteReservation} = require('../utlis/ReservationController');


const router = express.Router();

router.get('/', getAllReservations);
router.post('/', addReservation);
router.put('/:id', updateReservation);
router.delete('/:id', deleteReservation);

module.exports = router;