const express = require('express');
const route = express.Router();

const vessel_typeController = require('../controller/vessel_typeController.js');

route.get('/', vessel_typeController.index);
route.get('/:id', vessel_typeController.show);
route.post('/', vessel_typeController.store);
route.put('/:id', vessel_typeController.update);
route.delete('/:id', vessel_typeController.delete);

module.exports = route;