const User = require('../controllers/UserController');
const express = require('express');

var router = express.Router();

router.post('/register', User.register);
router.post('/login', User.login);

export default router;