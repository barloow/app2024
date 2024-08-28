const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/dotenv');

const authMiddleware = (req, res, next) => {
  
  const token = req.header('Authorization').replace('Bearer ', '');
  if (!token) {
    return res.status(401).send('No token access negative!');
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).send('Token is not valid!!')
  }
};

module.exports ={authMiddleware} ;