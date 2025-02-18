const express = require('express');
const route = express.Router();

const unitController = require('../controller/unitController.js');

route.get('/', unitController.index);
route.get('/:id', unitController.show);
route.post('/', unitController.store);
route.put('/:id', unitController.update);
route.delete('/:id', unitController.delete);

module.exports = route;