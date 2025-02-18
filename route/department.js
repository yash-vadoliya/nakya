const express = require('express');
const route = express.Router();

// create a contoller variable
const department_contoller = require('../controller/department_contoller.js');

// use controller variable, methods and declare a route
route.get('', department_contoller.index);
route.get('/:id', department_contoller.show);
route.post('', department_contoller.store);
route.put('/:id', department_contoller.update);
route.delete('/:id', department_contoller.delete);

// export route
module.exports = route;