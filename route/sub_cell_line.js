const express = require('express');
const route = express.Router();

const sub_cell_lineController = require('../controller/sub_cell_lineController.js');

route.get('/', sub_cell_lineController.index);
route.get('/:id', sub_cell_lineController.show);
route.post('/', sub_cell_lineController.store);
route.put('/:id', sub_cell_lineController.update);
route.delete('/:id', sub_cell_lineController.delete);

module.exports = route;

