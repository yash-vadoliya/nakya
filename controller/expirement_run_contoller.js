const con = require('../database');

exports.index = async(req,res) => {
    try{
        const results = await con.query("SELECT `id`,`expirement_id`, `start_time`, `end_time`, `status_id` FROM `tbl_expirement_run`");
        res.json(results);
    } catch (err) {
        res.json({'error':'Data Not Found'});
    }
};

exports.show = async(req,res) => {
    const id = req.params.id;
    try{
        const result = await con.query("SELECT * FROM `tbl_expirement_run` WHERE id = ?",[id]);
        res.json(result);
    } catch (err) {
        res.json({'error':'Data Not Found'});
    }
};

exports.store = async(req,res) => {
    const {expirement_id, start_time, end_time, status_id, add_uid, add_date, del_uid, del_date, rec_status, comments} = req.body;
    try{
        const query = "INSERT INTO `tbl_expirement_run`(`expirement_id`, `start_time`, `end_time`, `status_id`, `add_uid`, `add_date`, `del_uid`, `del_date`, `rec_status`, `comments`) VALUES (?,?,?,?,?,?,?,?,?,?)";
        const result = await con.query(query, [expirement_id, start_time, end_time, status_id, add_uid, add_date, del_uid, del_date, rec_status, comments]);
        console.log("expirement_run",req.body);
        res.json({'message':'Data Insert Sucessfully..'});
    } catch (err) {
        res.json({'error':'Data Not Insert'});
    }
};

exports.update = async(req,res) => {
    const id = req.params.id;
    const {expirement_id, start_time, end_time, status_id, add_uid, add_date, del_uid, del_date, rec_status, comments} = req.body;
    try{
        const quary = "UPDATE `tbl_expirement_run` SET `expirement_id`=?,`start_time`=?,`end_time`=?,`status_id`=?,`add_uid`=?,`add_date`=?,`del_uid`=?,`del_date`=?,`rec_status`=?,`comments`=? WHERE `id`=?";
        const result = await con.query(quary, [expirement_id, start_time, end_time, status_id, add_uid, add_date, del_uid, del_date, rec_status, comments,id]);
        console.log("expirement_run",req.body);
        res.json({'message':'Data Update Sucessfully..'});
    } catch (err) {
        res.json({'error':'Data Not Update'});
    }
};

exports.delete = async(req,res) => {
    const id = req.params.id;
    try{
        const results = await con.query("DELETE FROM `tbl_expirement_run` WHERE id = ?",[id]);
        res.json({'message':'Data Delete Sucessfully..'});
    } catch (err) {
        res.json({'error':'Data Not Delete'});
    }
}