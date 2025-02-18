const express = require('express');
const route = express.Router();

const expirement_statusController = require('../controller/expirement_status_contoller.js');

route.get('/',expirement_statusController.index);
route.get('/:id', expirement_statusController.show);
route.post('',expirement_statusController.store);
route.put('/:id', expirement_statusController.update);
route.delete('/:id', expirement_statusController.delete);

module.exports = route;