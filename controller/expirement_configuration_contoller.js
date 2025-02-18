const con = require('../database');

exports.index = async(req,res) => {
    try{
        const results = await con.query('SELECT `id`, `expirement_id`, `vessel_type_id`, `media_type_id`, `cell_line_type_id`, `temperature`, `ph_level`, `initial_volume_ml`, `additional_parameters` FROM `tbl_expirement_configuration`');
        res.json(results);
    }catch (err){
        res.json({'error':'Data Not Found'});
    }
};

exports.show = async(req,res) => {
    const id = req.params.id;
    try{
        const results = await con.query('SELECT * FROM `tbl_expirement_configuration` where id = ?',[id]);
        res.json(results);
    } catch (err) {
        res.json({'error':'Data Not Found'});
    }
};

exports.store = async(req,res) => {
    const {expirement_id, vessel_type_id, media_type_id, cell_line_type_id, temperature, ph_level, initial_volume_ml, additional_parameters, add_uid, add_date, del_uid, del_date, rec_status, comments} = req.body;
    try{
        const query = "INSERT INTO `tbl_expirement_configuration`(`expirement_id`, `vessel_type_id`, `media_type_id`, `cell_line_type_id`, `temperature`, `ph_level`, `initial_volume_ml`, `additional_parameters`, `add_uid`, `add_date`, `del_uid`, `del_date`, `rec_status`, `comments`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

        const results = await con.query(query,[expirement_id, vessel_type_id, media_type_id, cell_line_type_id, temperature, ph_level, initial_volume_ml, additional_parameters, add_uid, add_date, del_uid, del_date, rec_status, comments]);
        console.log("expirement_configuration",req.body);
        res.json({'message':'Data Insert Sucessfully..'});    
    } catch (err) {
        res.json({'error':'Data Not Insert'});
    }
};

exports.update = async(req,res) => {
    const id = req.params.id;
    const {expirement_id, vessel_type_id, media_type_id, cell_line_type_id, temperature, ph_level, initial_volume_ml, additional_parameters, add_uid, add_date, del_uid, del_date, rec_status, comments} = req.body;

    try{
        const query = "UPDATE `tbl_expirement_configuration` SET `expirement_id`=?,`vessel_type_id`=?,`media_type_id`=?,`cell_line_type_id`=?,`temperature`=?,`ph_level`=?,`initial_volume_ml`=?,`additional_parameters`=?,`add_uid`=?,`add_date`=?,`del_uid`=?,`del_date`=?,`rec_status`=?,`comments`=? WHERE `id`=?";

        const results = await con.query(query,[expirement_id, vessel_type_id, media_type_id, cell_line_type_id, temperature, ph_level, initial_volume_ml, additional_parameters, add_uid, add_date, del_uid, del_date, rec_status, comments]);
        console.log("expirement_configuration",req.body);
        res.json({'message':'Data Update Sucessfully..'});
    } catch (err) {
        res.json({'error':'Data Not Update'});
    }
};

exports.delete = async(req,res) => {
    const id = req.parms.id;
    try{
        const results = await con.query("DELETE FROM `tbl_expirement_configuration` WHERE id = ? ",[id]);

        res.json({'message':'Data Delete Sucessfully..'});
    } catch (err) {
        res.json({'error':'Data Not Delete'});
    }
};