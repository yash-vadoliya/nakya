const express = require('express');
const route = express.Router();

const expirement_run_status_contoller = require('../controller/expirement_run_status_contoller.js');

route.get('',expirement_run_status_contoller.index);
route.get('/:id', expirement_run_status_contoller.show);
route.post('', expirement_run_status_contoller.store);
route.put('/:id',expirement_run_status_contoller.update);
route.delete('/:id', expirement_run_status_contoller.delete);

module.exports = route;