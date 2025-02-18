const express = require('express');
const router = express.Router(); 
const { authenticateToken }  = require('../middleware/userauthMiddleware');

// create a route variable
const cell_line_type_Route = require('./cell_line_type');
const companyMasterRoute = require('./company_master');
const datumRoute = require('./datum');
const datum_fieldRoute = require('./datum_field');
const departmentRoute = require('./department');
const expirementRoute = require('./expirement');
const expirementConfigurationRoute = require('./expirement_configuration');
const expirementResultsRoute = require('./expirement_result');
const expirementRunRoute = require('./expirement_run');
const expirementRunStatusRoute = require('./expirement_run_status.js');
const expirementStatusRoute = require('./expirement_status.js');
const expirementtypeRoute = require('./expirement_type.js');
const instrumentRoute = require('./instrument');
const instrumenttypeRoute = require('./instrument_type.js');
const media_typeRoute = require('./media_type.js');
const organizationRoute = require('./organization.js');
const subcellLineRoute = require('./sub_cell_line.js');
const subvesseltypeRoute = require('./sub_vessel_type.js');
const tagRoute = require('./tag.js');
const tagtypeRoute = require('./tag_type.js');
const unitRoute = require('./unit.js');
const usersRoute = require('./users');
const vessel_typeRoute = require('./vessel_type.js');

// use Route fetch api data
router.use('/cell_line_type', authenticateToken, cell_line_type_Route);  
router.use('/company_master', authenticateToken, companyMasterRoute); 
router.use('/datum', authenticateToken, datumRoute);
router.use('/datum_field', authenticateToken, datum_fieldRoute); 
router.use('/department', authenticateToken, departmentRoute);
router.use('/expirement', authenticateToken, expirementRoute);
router.use('/expirement_configuration', authenticateToken, expirementConfigurationRoute);
router.use('/expirement_results', authenticateToken, expirementResultsRoute);
router.use('/expirement_run', authenticateToken, expirementRunRoute);
router.use('/expirement_run_status', authenticateToken, expirementRunStatusRoute);
router.use('/expirement_status', authenticateToken, expirementStatusRoute);
router.use('/expirement_type', authenticateToken, expirementtypeRoute);
router.use('/instrument', authenticateToken, instrumentRoute);
router.use('/instrument_type', authenticateToken, instrumenttypeRoute);
router.use('/media_type', authenticateToken, media_typeRoute);
router.use('/organization', authenticateToken, organizationRoute);
router.use('/sub_cell_line', authenticateToken, subcellLineRoute);
router.use('/sub_vessel_type', authenticateToken, subvesseltypeRoute);
router.use('/tag', authenticateToken, tagRoute);
router.use('/tag_type', authenticateToken, tagtypeRoute);
router.use('/unit', authenticateToken, unitRoute);
router.use('/users', authenticateToken, usersRoute);
router.use('/vessel_type', authenticateToken, vessel_typeRoute);

// export route
module.exports = router;  
