const express = require('express');
const route = express.Router();

// create a contoller variable
const expirement_contoller = require('../controller/expirement_contoller.js');

// use controller variable, methods and declare a route
route.get('', expirement_contoller.index);
route.get('/:id', expirement_contoller.show);
route.post('', expirement_contoller.store);
route.put('/:id', expirement_contoller.update);
route.delete('/:id', expirement_contoller.delete);

// export route
module.exports = route;