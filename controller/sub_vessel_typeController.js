const con = require('../database');

exports.index = async (req,res) => {
    try {
        const data = await con.query('SELECT `id`,`vessel_id`, `name`, `description` FROM `tbl_sub_vessel_type`');
        res.json(data);
    }  catch (err) {
        res.json({'error':'Data Not Found'});
    }
};

exports.show = async (req,res) => {
    const id = req.params.id;
    try {
        const data = await con.query('SELECT * FROM `tbl_sub_vessel_type` WHERE `id`=?',[id]);
        res.json(data);
    }  catch (err) {
        res.json({'error':'Data Not Found'});
    }
};

exports.store = async (req,res) => {
    const {vessel_id, name, description, add_uid, add_date, del_uid, del_date, rec_status, comments} = req.body;
    try {
        const insert = await con.query('INSERT INTO `tbl_sub_vessel_type`(`vessel_id`, `name`, `description`, `add_uid`, `add_date`, `del_uid`, `del_date`, `rec_status`, `comments`) VALUES (?,?,?,?,?,?,?,?,?)',[vessel_id, name, description, add_uid, add_date, del_uid, del_date, rec_status, comments]);
        console.log("sub_vessel_type",req.body);
        res.json({'message':'Data Insert Sucessfully..'});
    }  catch (err) {
        res.json({'error':'Data Not Insert'});
    }
};

exports.update = async (req,res) => {
    const id = req.params.id;
    const {vessel_id, name, description, add_uid, add_date, del_uid, del_date, rec_status, comments} = req.body;
    try {
        const update = await con.query('UPDATE `tbl_sub_vessel_type` SET `vessel_id`=?,`name`=?,`description`=?,`add_uid`=?,`add_date`=?,`del_uid`=?,`del_date`=?,`rec_status`=?,`comments`=? WHERE `id`=?',[vessel_id, name, description, add_uid, add_date, del_uid, del_date, rec_status, comments,id]);
        console.log("sub_vessel_type",req.body);
        res.json({'message':'Data Update Sucessfully..'});
    }  catch (err) {
        res.json({'error':'Data Not Found'});
    }
};

exports.delete = async (req,res) => {
    const id = req.params.id;
    try {
        const delete_data = await con.query('DELETE FROM `tbl_sub_vessel_type` WHERE `id`=?',[id]);
        res.json({'message':'Data Delete Sucessfully..'});
    }  catch (err) {
        res.json({'error':'Data Not Found'});
    }
};