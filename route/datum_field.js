const express = require('express');
const route = express.Router();

// create a contoller variable
const datum_field_controller = require('../controller/datum_field_controller.js');

// use controller variable, methods and declare a route
route.get('', datum_field_controller.index);
route.get('/:id', datum_field_controller.show);
route.post('', datum_field_controller.store);
route.put('/:id', datum_field_controller.update);
route.delete('/:id', datum_field_controller.delete);

// export route
module.exports = route;