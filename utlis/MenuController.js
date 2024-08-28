const Menu = require('../models/MenuModel');

// Get menu for a specific restaurant
const getMenuByRestaurant = async (req, res) => {
  const { restaurantId } = req.params;
  try {
    const menu = await Menu.findOne({ restaurant: restaurantId });
    res.json(menu);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching menu', error });
  }
};

// Add a new menu item
const addMenuItem = async (req, res) => {
  const { restaurantId } = req.params;
  const { name, description, price } = req.body;

  try {
    let menu = await Menu.findOne({ restaurant: restaurantId });
    if (!menu) {
      menu = new Menu({ restaurant: restaurantId, items: [] });
    }

    menu.items.push({ name, description, price });
    await menu.save();
    res.status(201).json({ message: 'Menu item added successfully', menu });
  } catch (error) {
    res.status(500).json({ message: 'Error adding menu item', error });
  }
};

// Update a menu item
const updateMenuItem = async (req, res) => {
  const { restaurantId, itemId } = req.params;
  const updates = req.body;

  try {
    const menu = await Menu.findOne({ restaurant: restaurantId });
    const itemIndex = menu.items.findIndex(item => item._id.toString() === itemId);

    if (itemIndex > -1) {
      menu.items[itemIndex] = { ...menu.items[itemIndex], ...updates };
      await menu.save();
      res.json({ message: 'Menu item updated successfully', menu });
    } else {
      res.status(404).json({ message: 'Menu item not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating menu item', error });
  }
};

// Delete a menu item
const deleteMenuItem = async (req, res) => {
  const { restaurantId, itemId } = req.params;

  try {
    const menu = await Menu.findOne({ restaurant: restaurantId });
    menu.items = menu.items.filter(item => item._id.toString() !== itemId);
    await menu.save();
    res.json({ message: 'Menu item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting menu item', error });
  }
};

module.exports = {
  deleteMenuItem,
  updateMenuItem,
  addMenuItem,
  getMenuByRestaurant
};
