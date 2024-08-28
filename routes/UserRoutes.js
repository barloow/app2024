const express = require('express');
const { getProfile, Login, Register} = require('../utlis/UserController');

const router = express.Router();

router.post('/register', Register);
router.post('/login', Login);
router.get('/profile', getProfile);

module.exports = router;