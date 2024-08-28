const mongoose = require('mongoose');

const adminMiddleware = (req, res, next) => {
    if (req.user.role !== 'admin') {
      return res.status(403).send('Access denied');
    }
    next();
};
  
module.exports = {adminMiddleware};