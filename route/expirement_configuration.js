const express = require('express');
const route = express.Router();

// create a contoller variable
const expirement_configuration_Controller = require("../controller/expirement_configuration_contoller");

// use controller variable, methods and declare a route
route.get('',expirement_configuration_Controller.index);
route.get('/:id',expirement_configuration_Controller.show);
route.post('', expirement_configuration_Controller.store);
route.put('/:id',expirement_configuration_Controller.update);
route.delete('/:id',expirement_configuration_Controller.delete);

// export route
module.exports = route;