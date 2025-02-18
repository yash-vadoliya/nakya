const express = require('express');
const route = express.Router();

// create a contoller variable
const datum_controller = require('../controller/datum_contoller.js');

// use controller variable, methods and declare a route
route.get('', datum_controller.index);
route.get('/:id', datum_controller.show);
route.post('', datum_controller.store);
route.put('/:id', datum_controller.update);
route.delete('/:id', datum_controller.delete);

// export route
module.exports = route;