const con = require('../database.js');
// fetch all data from database
exports.index =  async (req,res) => {
   try{
        const results = await con.query('SELECT id,name FROM `tbl_company_master`');
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
        const results = await con.query('SELECT * FROM `tbl_company_master` WHERE id = ?', [id]);

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
        
        const query = 'INSERT INTO `tbl_company_master`(`name`, `description`, `add_uid`, `add_date`, `del_uid`, `del_date`, `rec_status`, `comments`) VALUES (?,?,?,?,?,?,?,?)';
        
        const results = await con.query(query, [name, description, add_uid, add_date, del_uid, del_date, rec_status, comments]);
        console.log("company_master",req.body);
        res.json({'message':'Data Insert Sucessfully..'});
    } catch(err){
        res.json({'error':'Data Not Insert'});
    }
};

// update data into database where id is define
exports.update = async (req, res) => {
    try {
        const { id } = req.params; 
        const { name, description, add_uid, add_date, del_uid, del_date, rec_status, comments } = req.body;

        const query = 'UPDATE `tbl_company_master` SET `name`=?,`description`=?,`add_uid`=?,`add_date`=?,`del_uid`=?,`del_date`=?,`rec_status`=?,`comments`=? WHERE `id`=?';

        const [results] = await con.query(query, [name, description, add_uid, add_date, del_uid, del_date, rec_status, comments, id]);
        console.log("company_master",req.body);
        res.json({'message':'Data Update Sucessfully..'});
    } catch (err) {
        res.json({'error':'Data Not Update'});
    }
};

// delete data from database where id is define
exports.delete = async (req, res) => {
    try{
        const id = req.params.id;
        const query = 'DELETE FROM `tbl_company_master` WHERE id =?';

        const results = await con.query(query, [id]);

        res.json({'message':'Data Delete Sucessfully..'});
    } catch(err){
        res.json({'error':'Data Not Delete'});
    }
};