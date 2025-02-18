const express = require('express');
const route = express.Router();

const instrument_type_Controller = require('../controller/instrument_type_controller.js');

route.get('/', instrument_type_Controller.index);
route.get('/:id',instrument_type_Controller.show);
route.post('/',instrument_type_Controller.store);
route.put('/:id',instrument_type_Controller.update);
route.delete('/:id',instrument_type_Controller.delete);

module.exports = route;