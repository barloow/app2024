const express = require('express');
const {getMenuByRestaurant, addMenuItem, updateMenuItem,deleteMenuItem} = require('../utlis/MenuController');


const router = express.Router();

router.get('/:restaurantId', getMenuByRestaurant);
router.post('/:restaurantId', addMenuItem);
router.put('/:restaurantId/:itemId',updateMenuItem);
router.delete('/:restaurantId/:itemId', deleteMenuItem);

module.exports = router;