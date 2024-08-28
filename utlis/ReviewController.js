const Review = require('../models/ReviewModel');

// Get reviews for a specific restaurant
const getReviewsByRestaurant = async (req, res) => {
  const { restaurantId } = req.params;
  try {
    const reviews = await Review.find({ restaurant: restaurantId }).populate('user');
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reviews', error });
  }
};

// Add a new review
const addReview = async (req, res) => {
  const { restaurantId } = req.params;
  const { rating, comment } = req.body;

  const review = new Review({
    user: req.user.id,
    restaurant: restaurantId,
    rating,
    comment,
  });

  try {
    await review.save();
    res.status(201).json({ message: 'Review added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding review', error });
  }
};

// Update a review
const updateReview = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const review = await Review.findByIdAndUpdate(id, updates, { new: true });
    res.json(review);
  } catch (error) {
    res.status(500).json({ message: 'Error updating review', error });
  }
};

// Delete a review
const deleteReview = async (req, res) => {
  const { id } = req.params;

  try {
    await Review.findByIdAndDelete(id);
    res.json({ message: 'Review deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting review', error });
  }
};
module.exports = {
  deleteReview,
  updateReview,
  addReview,
  getReviewsByRestaurant
};