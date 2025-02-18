const express = require('express');
const route = express.Router();

// create a contoller variable
const users_contoller = require('../controller/users_contoller.js');

// use controller variable, methods and declare a route
route.get('', users_contoller.index);
route.get('/:id', users_contoller.show);
route.post('', users_contoller.store);
route.put('/:id', users_contoller.update);
route.delete('/:id', users_contoller.delete);

// export route
module.exports = route;