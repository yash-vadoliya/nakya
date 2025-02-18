const express = require('express');
const route = express.Router();

const instrument_Controller = require('../controller/instrument_controller.js');

route.get('/', instrument_Controller.index);
route.get('/:id',instrument_Controller.show);
route.post('/',instrument_Controller.store);
route.put('/:id',instrument_Controller.update);
route.delete('/:id',instrument_Controller.delete);

module.exports = route;