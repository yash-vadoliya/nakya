const con = require('../database');

exports.index = async (req,res) => {
    try {
        const data = await con.query('SELECT `id`,`name`, `description` FROM `tbl_tag_type`');
        res.json(data);
    }  catch (err) {
        res.json({'error':'Data Not Found'});
    }
};

exports.show = async (req,res) => {
    const id = req.params.id;
    try {
        const data = await con.query('SELECT * FROM `tbl_tag_type` WHERE `id`=?',[id]);
        res.json(data);
    }  catch (err) {
        res.json({'error':'Data Not Found'});
    }
};

exports.store = async (req,res) => {
    const {name, description, add_uid, add_date, del_uid, del_date, rec_status, comments} = req.body;
    try {
        const insert = await con.query('INSERT INTO `tbl_tag_type`(`name`, `description`, `add_uid`, `add_date`, `del_uid`, `del_date`, `rec_status`, `comments`) VALUES (?,?,?,?,?,?,?,?)',[name, description, add_uid, add_date, del_uid, del_date, rec_status, comments]);
        console.log("tag_type",req.body);
        res.json({'message':'Data Insert Sucessfully..'});
    }  catch (err) {
        res.json({'error':'Data Not Insert'});
    }
};

exports.update = async (req,res) => {
    const id = req.params.id;
    const {name, description, add_uid, add_date, del_uid, del_date, rec_status, comments} = req.body;
    try {
        const update = await con.query('UPDATE `tbl_tag_type` SET `name`=?,`description`=?,`add_uid`=?,`add_date`=?,`del_uid`=?,`del_date`=?,`rec_status`=?,`comments`=? WHERE `id`=?',[name, description, add_uid, add_date, del_uid, del_date, rec_status, comments,id]);
        console.log("tag_type",req.body);
        res.json({'message':'Data Update Sucessfully..'});
    }  catch (err) {
        res.json({'error':'Data Not Found'});
    }
};

exports.delete = async (req,res) => {
    const id = req.params.id;
    try {
        const delete_data = await con.query('DELETE FROM `tbl_tag_type` WHERE `id`=?',[id]);
        res.json({'message':'Data Delete Sucessfully..'});
    }  catch (err) {
        res.json({'error':'Data Not Found'});
    }
};