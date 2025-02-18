const express = require('express');
const route = express.Router();

const media_typeController = require('../controller/media_typeController.js');

route.get('', media_typeController.index);
route.get('/:id', media_typeController.show);
route.post('', media_typeController.store);
route.put('/:id', media_typeController.update);
route.delete('/:id', media_typeController.delete);

module.exports = route;
