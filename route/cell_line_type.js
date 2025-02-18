const express = require('express');
const route = express.Router();

const cell_line_type_controller = require('../controller/cell_line_type_controller.js');

route.get('', cell_line_type_controller.index);
route.get('/:id', cell_line_type_controller.show);
route.post('', cell_line_type_controller.store);
route.put('/:id', cell_line_type_controller.update);
route.delete('/:id', cell_line_type_controller.delete);


module.exports = route;