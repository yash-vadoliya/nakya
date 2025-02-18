const con = require('../database.js');

// fetch all data from database
exports.index =  async (req,res) => {
   try{
        const results = await con.query('SELECT `id`, `username`, `email`, `password_hash`, `department_id`, `user_role`, `organization_id` FROM `tbl_users`');
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
        const results = await con.query('SELECT * FROM `tbl_users` WHERE id = ?', [id]);

        if(results.length === 0){
            return res.status(404).json({ message : 'Data Not Found..'});
        }

        res.json(results);
    } catch(err){
        res.json({'error':'Data Not Found'});
    }
};

// insert data into database
const bcrypt = require('bcrypt');
// const conn = require('../database/connection'); // Assuming this is your DB connection module

exports.store = async (req, res) => {
    try {
        const { username, email, password_hash, department_id, user_role, organization_id, add_uid, add_date, del_uid, del_date, rec_status, comments, last_login } = req.body;

        // Check if the user already exists
        const existingUserQuery = 'SELECT * FROM tbl_users WHERE username = ?';
        const [existingUser] = await con.query(existingUserQuery, [username]);

        if (existingUser.length > 0) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password (saltRounds between 10-12 are generally used)
        const hash_password = await bcrypt.hash(password_hash, 10);

        // Insert new user
        const query = `INSERT INTO tbl_users (username, email, password_hash, department_id, user_role,organization_id, add_uid, add_date, del_uid, del_date,rec_status,comments, last_login) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

        await con.query(query, [username, email, hash_password, department_id, user_role,organization_id, add_uid, add_date, del_uid, del_date,rec_status, comments, last_login]);
        console.log("users",req.body);
        return res.status(201).json({ message: 'User inserted successfully' });
    } catch (err) {
        cores.json({'error':'Data Not Insert'});
    }
};


// update data into database where id is define
exports.update = async (req, res) => {
    try {
        const { id } = req.params; 
        const { username, email, password_hash, department_id, user_role, organization_id, add_uid, add_date, del_uid, del_date, rec_status, comments, last_login} = req.body;

        const query = 'UPDATE `tbl_users` SET `username`=? ,`email`=? ,`password_hash`=? ,`department_id`=? ,`user_role`=? ,`organization_id`=? ,`add_uid`=? ,`add_date`=? ,`del_uid`=? ,`del_date`=? ,`rec_status`=? ,`comments`=? ,`last_login`=?  WHERE `id` = ?';

        const [results] = await con.query(query, [username, email, password_hash, department_id, user_role, organization_id, add_uid, add_date, del_uid, del_date, rec_status, comments, last_login, id]);
        console.log("users",req.body);
        res.json({ message: 'Record updated successfully' });
    } catch (err) {
        res.json({'error':'Data Not Update'});
    }
};


// delete data from database where id is define
exports.delete = async (req, res) => {
    try{
        const id = req.params.id;
        const query = 'DELETE FROM `tbl_users` WHERE id =?';

        const results = await con.query(query, [id]);

        res.json({ 'message': 'Student Delete successfully' });
    } catch(err){
        res.json({'error':'Data Not Delete'});
    }
};