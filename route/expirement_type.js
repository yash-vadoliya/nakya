const express = require('express');
const route = express.Router();

const expirement_typeController = require('../controller/expirement_type_contoller.js');

route.get('/',expirement_typeController.index);
route.get('/:id', expirement_typeController.show);
route.post('/',expirement_typeController.store);
route.put('/:id', expirement_typeController.update);
route.delete('/:id', expirement_typeController.delete);

module.exports = route;