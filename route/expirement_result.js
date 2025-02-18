const express = require('express');
const route = express.Router();

const expirement_resultController = require('../controller/expirement_result_contoller.js');

route.get('', expirement_resultController.index);
route.get('/:id', expirement_resultController.show);
route.post('',expirement_resultController.store);
route.put('/:id',expirement_resultController.update);
route.delete('/:id', expirement_resultController.delete);

module.exports = route;