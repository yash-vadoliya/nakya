const con = require('../database.js');

// fetch all data from database
exports.index =  async (req,res) => {
   try{
        const results = await con.query('SELECT id,name FROM `tbl_cell_line_type`');
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
        const results = await con.query('SELECT id,name FROM `tbl_sub_cell_line` WHERE cell_line_id = ?', [id]);

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
        const {name, description, add_uid, add_date, del_uid, del_date, rec_status, comments} = req.body;
        
        const query = 'INSERT INTO `tbl_cell_line_type`(`name`, `description`, `add_uid`, `add_date`, `del_uid`, `del_date`, `rec_status`, `comments`) VALUES (?,?,?,?,?,?,?,?)';
        
        const results = await con.query(query, [name, description, add_uid, add_date, del_uid, del_date, rec_status, comments]);

        console.log("Cell_line_type",req.body);
        res.json({'message':'Data Insert Sucessfully..'});
    } catch(err){
        res.json({'error':'Data Not Insert'});
        console.log(err);
    }
};

// update data into database where id is define
exports.update = async (req, res) => {
    try {
        const { id } = req.params; 
        const { name, description, add_uid, add_date, del_uid, del_date, rec_status, comments } = req.body;

        const query = 'UPDATE `tbl_cell_line_type` SET `name`= ?, `description`= ?, `add_uid`= ?, `add_date`= ?, `del_uid`= ?, `del_date`= ?, `rec_status`= ?, `comments`= ? WHERE `id` = ?';

        const [results] = await con.query(query, [name, description, add_uid, add_date, del_uid, del_date, rec_status, comments, id]);
        console.log("Cell_line_type",req.body);
        res.json({'message':'Data Update Sucessfully..'});
    } catch (err) {
        res.json({'error':'Data Not Update'});
    }
};


// delete data from database where id is define
exports.delete = async (req, res) => {
    try{
        const id = req.params.id;
        const query = 'DELETE FROM `tbl_cell_line_type` WHERE id =?' 

        const results = await con.query(query, [id]);

        res.json({'message':'Data Delete Sucessfully..'});
    } catch(err){
        res.json({'error':'Data Not Delete'});
    }
};