const con = require('../database');

exports.index = async(req,res) => {
    try{
        const results = await con.query("SELECT `id`,`status_name`,`description` FROM `tbl_expirement_run_status`");
        res.json(results);
    } catch (err) {
        res.json({'error':'Data Not Found'});
    }
};

exports.show = async(req,res) => {
    const id = req.params.id;
    try{
        const results = await con.query("SELECT * FROM `tbl_expirement_run_status` WHERE id = ?");
        res.json(results);
    } catch (err) {
        res.json({'error' : 'Data Not Found'});
    }
};

exports.store = async(req,res) => {
    const {status_name, description, add_uid, add_date, del_uid, del_date, rec_status, comments} = req.body;
    try{
        const quary = "INSERT INTO `tbl_expirement_run_status`(`status_name`, `description`, `add_uid`, `add_date`, `del_uid`, `del_date`, `rec_status`, `comments`) VALUES (?,?,?,?,?,?,?,?)";
        const results = await con.query(quary, [status_name, description, add_uid, add_date, del_uid, del_date, rec_status, comments]);
        console.log("expirement_run_status",req.body);
        res.json({'message':'Data Insert Sucessfully..'});
    } catch (err) {
        res.json({'error':'Data Not Insert'});
    }
};

exports.update = async(req,res) => {
    const id = req.params.id;
    const {status_name, description, add_uid, add_date, del_uid, del_date, rec_status, comments} = req.body;
    try {
        const quary = "UPDATE `tbl_expirement_run_status` SET `status_name`=?,`description`=?,`add_uid`=?,`add_date`=?,`del_uid`=?,`del_date`=?,`rec_status`=?,`comments`=? WHERE `id`=?";
        const results = await con.query(quary, [status_name, description, add_uid, add_date, del_uid, del_date, rec_status, comments,id]);
        console.log("expirement_run_status",req.body);
        res.json({'message':'Data Update Sucessfully..'});
    } catch (err) {
        res.json({'error':'Data Not Update'});
    }
}

exports.delete = async(req,res) => {
    const id = req.params.id;
    try{
        const results = await con.query('DELETE FROM `tbl_expirement_run_status` WHERE `id`=?',[id]);
        res.json({'message':'Data Delete Sucessfully..'});
    } catch (err) {
        res.json({'error':'Data Not Delete'});
    }
}