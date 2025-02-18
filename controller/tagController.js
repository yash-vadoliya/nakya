const con = require('../database');

exports.index = async (req,res) => {
    try {
        const data = await con.query('SELECT `id`,`name`, `description` FROM `tbl_tag`');
        res.json(data);
    }  catch (err) {
        res.json({'error':'Data Not Found'});
    }
};

exports.show = async (req,res) => {
    const id = req.params.id;
    try {
        const data = await con.query('SELECT * FROM `tbl_tag` WHERE `id`=?',[id]);
        res.json(data);
    }  catch (err) {
        res.json({'error':'Data Not Found'});
    }
};

exports.store = async (req,res) => {
    const {name, description, tag_type_id, add_uid, add_date, del_uid, del_date, rec_status, comments} = req.body;
    try {
        const insert = await con.query('INSERT INTO `tbl_tag`(`name`, `description`, `tag_type_id`, `add_uid`, `add_date`, `del_uid`, `del_date`, `rec_status`, `comments`) VALUES (?,?,?,?,?,?,?,?,?)',[name, description, tag_type_id, add_uid, add_date, del_uid, del_date, rec_status, comments]);
        console.log("tag",req.body);
        res.json({'message':'Data Insert Sucessfully..'});
    }  catch (err) {
        res.json({'error':'Data Not Insert'});
    }
};

exports.update = async (req,res) => {
    const id = req.params.id;
    const {name, description, tag_type_id, add_uid, add_date, del_uid, del_date, rec_status, comments} = req.body;
    try {
        const update = await con.query('UPDATE `tbl_tag` SET `name`=?,`description`=?,`tag_type_id`=?,`add_uid`=?,`add_date`=?,`del_uid`=?,`del_date`=?,`rec_status`=?,`comments`=? WHERE `id`=?',[name, description, tag_type_id, add_uid, add_date, del_uid, del_date, rec_status, comments,id]);
        console.log("tag",req.body);
        res.json({'message':'Data Update Sucessfully..'});
    }  catch (err) {
        res.json({'error':'Data Not Found'});
    }
};

exports.delete = async (req,res) => {
    const id = req.params.id;
    try {
        const delete_data = await con.query('DELETE FROM `tbl_tag` WHERE `id`=?',[id]);
        res.json({'message':'Data Delete Sucessfully..'});
    }  catch (err) {
        res.json({'error':'Data Not Found'});
    }
};