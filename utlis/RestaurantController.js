const Restaurant = require('../models/RestaurantModel');

// Get all restaurants
const getAllRestaurants = async (req, res) => {
    try {
      const restaurants = await Restaurant.find();
      res.json(restaurants);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching restaurants', error });
    }
  };
  
  // Add new restaurant
  const addRestaurant = async (req, res) => {
    const { name, address, phone, description, menu } = req.body;
    const restaurant = new Restaurant({ name, address, phone, description, menu });
  
    try {
      await restaurant.save();
      res.status(201).json({ message: 'Restaurant added successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error adding restaurant', error });
    }
  };
  
  // Update restaurant
  const updateRestaurant = async ({body}, res) => {
    const { id } = req.params;
    const updates = body;
  
    try {
      const restaurant = await Restaurant.findByIdAndUpdate(id, updates, { new: true });
      res.json(restaurant);
    } catch (error) {
      res.status(500).json({ message: 'Error updating restaurant', error });
    }
  };
  
  // Delete restaurant
  const deleteRestaurant = async (req, res) => {
    const { id } = req.params;
  
    try {
      await Restaurant.findByIdAndDelete(id);
      res.json({ message: 'Restaurant deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting restaurant', error });
    }
  };

  module.exports={
    deleteRestaurant,
    updateRestaurant,
    addRestaurant,
    getAllRestaurants
  };