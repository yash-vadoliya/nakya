const express = require('express');
const route = express.Router();

const tag_typeController = require('../controller/tag_typeController.js');

route.get('/', tag_typeController.index);
route.get('/:id', tag_typeController.show);
route.post('/', tag_typeController.store);
route.put('/:id', tag_typeController.update);
route.delete('/:id', tag_typeController.delete);

module.exports = route;