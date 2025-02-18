const express = require('express');
const route = express.Router();

const expirement_runController =  require('../controller/expirement_run_contoller.js');

route.get('/',expirement_runController.index);
route.get('/:id', expirement_runController.show);
route.post('',expirement_runController.store);
route.put('/:id', expirement_runController.update);
route.delete('/:id', expirement_runController.delete);

module.exports = route;