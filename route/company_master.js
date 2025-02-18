const express = require('express');
const route = express.Router();

// create a contoller variable
const comapny_master_controller = require('../controller/comapny_master_controller.js');

// use controller variable, methods and declare a route
route.get('', comapny_master_controller.index);
route.get('/:id', comapny_master_controller.show);
route.post('', comapny_master_controller.store);
route.put('/:id', comapny_master_controller.update);
route.delete('/:id', comapny_master_controller.delete);

// export route
module.exports = route;