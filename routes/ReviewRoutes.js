const express = require('express');
const router = express.Router();
const {getReviewsByRestaurant,addReview,updateReview,deleteReview} = require('../utlis/ReviewController');

router.get('/:restaurantId', getReviewsByRestaurant);
router.post('/:restaurantId',addReview);
router.put('/:id', updateReview);
router.delete('/:id', deleteReview);

module.exports = router;