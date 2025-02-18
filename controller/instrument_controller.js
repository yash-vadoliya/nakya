const con = require('../database.js');

exports.index = async(req,res) => {
    try {
        const results = await con.query('SELECT `id`,`name`, `description`, `manufacturer`, `in_model`, `calibration_date`, `instrument_type_id` FROM `tbl_instrument`');
        res.json(results);
    }catch (err) {
        res.json({'error':'Data Not Found'});
    }
};

exports.show = async(req,res) => {
    const id = req.params.id;

    try { 
        const results = await con.query('SELECT `name`, `description`, `manufacturer`, `in_model`, `calibration_date`, `instrument_type_id` FROM `tbl_instrument` WHERE id = ?',id);
        res.json(results);
    }catch(err){
        res.json({'error':'Data Not Found'});
    }
};

exports.store = async(req,res) =>{
   try{
        const {name, description, manufacturer, in_model, calibration_date, instrument_type_id, add_uid, add_date, del_uid, del_date, rec_status, comments} = req.body;

        const query = 'INSERT INTO `tbl_instrument`(`name`, `description`, `manufacturer`, `in_model`, `calibration_date`, `instrument_type_id`, `add_uid`, `add_date`, `del_uid`, `del_date`, `rec_status`, `comments`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)';

        const results = await con.query(query,[name, description, manufacturer, in_model, calibration_date, instrument_type_id, add_uid, add_date, del_uid, del_date, rec_status, comments]);
        console.log("instrument",req.body);
        res.json({'message':'Data Insert Sucessfully..'});
   } catch(err){
    res.json({'error':'Data Not Insert'});
   }
};

exports.update = async(req,res) => {
    try{
        const id = req.params.id;

        const {name, description, manufacturer, in_model, calibration_date, instrument_type_id, add_uid, add_date, del_uid, del_date, rec_status, comments} = req.body;

        const query = 'UPDATE `tbl_instrument` SET `name`=?, `description`=?, `manufacturer`=?, `in_model`=?, `calibration_date`=?, `instrument_type_id`=?, `add_uid`=?, `add_date`=?, `del_uid`=? ,`del_date`=? ,`rec_status`=? ,`comments`=?  WHERE id = ?';

        const results = await con.query(query,[name, description, manufacturer, in_model, calibration_date, instrument_type_id, add_uid, add_date, del_uid, del_date, rec_status, comments, id]);
        console.log("instrument",req.body);
        res.json({'message':'Data Update Sucessfully..'}); 
    } catch (err) {
        res.json({'error':'Data Not Update'});
    }
};

exports.delete = async(req,res) => {
    try{
        const id = req.params.id;

        const results = await con.query('DELETE FROM `tbl_instrument` WHERE id = ?',id);

        res.json({'message':'Data Delete Sucessfully..'});
    }catch (err) { 
        res.json({'error':'Data Not Delete'});
    }
};

