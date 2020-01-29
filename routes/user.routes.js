const express = require('express');
const User = require('../models/user.model');
const encrypt = require('../helpers/encrypt');

const router = express.Router();
const userConroller = require('../controllers/user.controller');

router.post('/register', userConroller.create);

module.exports = router;
