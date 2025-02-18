const con = require('../database.js');

// fetch all data from database
exports.index =  async (req,res) => {
   try{
        const results = await con.query('SELECT `id`,`result_id`, `field_id`, `field_value`, `unit_id` FROM `tbl_datum`');
        res.json(results);
   }
   catch(err){
        res.json({'error':'Data Not Found'});
   }
};

// fetch data from database where id is define
exports.show = async (req,res) => {
    try{
        const id = req.params.id;
        const results = await con.query('SELECT * FROM `tbl_datum` WHERE id = ?', [id]);

        if(results.length === 0){
            return res.status(404).json({ message : 'Data Not Found..'});
        }

        res.json(results);
    } catch(err){
        res.json({'error':'Data Not Found'});
    }
};

// insert data into database
exports.store = async (req,res) => {
    try {
        const {result_id, field_id, field_value, unit_id, recorded_at, add_uid, add_date, del_uid, del_date, rec_status, comments} = req.body;
        
        const query = 'INSERT INTO `tbl_datum`(`result_id`, `field_id`, `field_value`, `unit_id`, `recorded_at`, `add_uid`, `add_date`, `del_uid`, `del_date`, `rec_status`, `comments`) VALUES (?,?,?,?,?,?,?,?,?,?,?)';
        
        const results = await con.query(query, [result_id, field_id, field_value, unit_id, recorded_at, add_uid, add_date, del_uid, del_date, rec_status, comments]);
        console.log("datum",req.body);
        res.json({'message':'Data Insert Sucessfully..'});
    } catch(err){
        res.json({'error':'Data Not Insert'});
    }
};

// update data into database where id is define
exports.update = async (req, res) => {
    try {
        const { id } = req.params; 
        const { result_id, field_id, field_value, unit_id, recorded_at, add_uid, add_date, del_uid, del_date, rec_status, comments} = req.body;

        const query = 'UPDATE `tbl_datum` SET `result_id`= ? ,`field_id`= ? ,`field_value`= ? ,`unit_id`= ? ,`recorded_at`= ? ,`add_uid`= ? ,`add_date`= ? ,`del_uid`= ? ,`del_date`= ? ,`rec_status`= ? ,`comments`= ?  WHERE `id` = ?';

        const [results] = await con.query(query, [result_id, field_id, field_value, unit_id, recorded_at, add_uid, add_date, del_uid, del_date, rec_status, comments, id]);
        console.log("datum",req.body);
        res.json({'message':'Data Update Sucessfully..'});
    } catch (err) {
        res.json({'error':'Data Not Update'});
    }
};


// delete data from database where id is define
exports.delete = async (req, res) => { 
    try{
        const id = req.params.id;
        const query = 'DELETE FROM `tbl_datum` WHERE id =?' 

        const results = await con.query(query, [id]);

        res.json({'message':'Data Delete Sucessfully..'});
    } catch(err){
        res.json({'error':'Data Not Delete'});
    }
};