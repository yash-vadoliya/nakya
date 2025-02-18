const con = require('../database');

exports.index = async(req,res) => {
    try{
        const results = await con.query("SELECT * FROM `tbl_expirement_result`");
        res.json(results);
    } catch(err) {
        res.json({'error':'Data Not Found'});
    }
};

exports.show = async(req,res) => {
    const id = req.params.id;
    try{
        const results = await con.query("SELECT * FROM `tbl_expirement_result` WHERE id = ?",[id]);
        res.json(results);
    } catch (err) {
        res.json({'error':'Data Not Found'});
    }
};

exports.store = async(req,res) => {
    const {expirement_run_id, result_time, add_uid, add_date, del_uid, del_date, rec_status, comments} = req.body;
    try{
        const query = "INSERT INTO `tbl_expirement_result`(`expirement_run_id`, `result_time`, `add_uid`, `add_date`, `del_uid`, `del_date`, `rec_status`, `comments`) VALUES (?,?,?,?,?,?,?,?)"
        const results = await con.query(query,[expirement_run_id, result_time, add_uid, add_date, del_uid, del_date, rec_status, comments]);
        console.log("expirement_result",req.body);
        res.json({'message':'Data Insert Sucessfully..'});
    } catch (err) {
        res.json({'error':'Data Not Insert'});
    }
};

exports.update = async(req,res) => {
    const id = req.params.id;
    const {expirement_run_id, result_time, add_uid, add_date, del_uid, del_date, rec_status, comments} = req.body;
    try {
        const query_string = "UPDATE `tbl_expirement_result` SET `expirement_run_id`=?,`result_time`=?,`add_uid`=?,`add_date`=?,`del_uid`=?,`del_date`=?,`rec_status`=?,`comments`=? WHERE `id`=?";
        const results = await con.query(query_string,[expirement_run_id, result_time, add_uid, add_date, del_uid, del_date, rec_status, comments,id]);
        console.log("expirement_result",req.body);
        res.json({'message':'Data Update Sucessfully..'});
    } catch (err) {
        res.json({'error':'Data Not Update'});
    }
};

exports.delete = async(req,res) => {
    const id = req.params.id;
    try {
         const rsults = await con.query("DELETE FROM `tbl_expirement_result` WHERE `id` = ?",[id]);
         res.json({'message':'Data Delete Sucessfully..'});
    } catch (err) {
        res.json({'error':'Data Not Delete'});
    }
}