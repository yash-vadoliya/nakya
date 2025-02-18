const express = require('express');
const route = express.Router();

const tagController = require('../controller/tagController.js');

route.get('/', tagController.index);
route.get('/:id', tagController.show);
route.post('/', tagController.store);
route.put('/:id', tagController.update);
route.delete('/:id', tagController.delete);

module.exports = route;