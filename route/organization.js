const express = require('express');
const route = express.Router();

const organization_controller = require('../controller/organzationController.js');

route.get('/', organization_controller.index);
route.get('/:id', organization_controller.show);
route.post('/', organization_controller.store);
route.put('/:id', organization_controller.update);
route.delete('/:id', organization_controller.delete);

module.exports = route;