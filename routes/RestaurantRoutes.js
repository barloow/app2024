const express = require('express');
const {getAllRestaurants, addRestaurant, updateRestaurant, deleteRestaurant} = require('../utlis/RestaurantController');

const router = express.Router();

router.get('/', getAllRestaurants);
router.post('/', addRestaurant);
router.put('/:id', updateRestaurant);
router.delete('/:id', deleteRestaurant);

module.exports = router;