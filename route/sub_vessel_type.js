const express = require('express');
const route = express.Router();

const sub_vessel_typeController = require('../controller/sub_vessel_typeController.js');

route.get('/', sub_vessel_typeController.index);
route.get('/:id', sub_vessel_typeController.show);
route.post('/', sub_vessel_typeController.store);
route.put('/:id', sub_vessel_typeController.update);
route.delete('/:id', sub_vessel_typeController.delete);

module.exports = route;

