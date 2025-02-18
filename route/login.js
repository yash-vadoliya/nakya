const express = require('express');
const route = express.Router();
const authController = require('../controller/authcontroller.js');

route.post('/login', authController.login);
route.all('/logout', authController.logout);

module.exports = route;