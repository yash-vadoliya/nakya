const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const con = require('../database.js');

const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        console.log("username:",username);
        console.log("password:",password);

        // Query the user data from the database
        const [users] = await con.query('SELECT * FROM `tbl_users` WHERE username = ?', [username]);
        const user = users[0]; // Retrieve the first user from the result

        // Check if user exists
        if (!user) {
            return res.status(400).send("Invalid User");
        }

        // Compare hashed password
        // const passwordMatch = await bcrypt.compare(password, user.password_hash);
        if (password != user.password_hash) {
            return res.status(400).send("Invalid Password");
        }
  
        // Generate JWT token
        try {
            const token = jwt.sign(
                { id: user.id, username: user.username },
                process.env.JWT_SECRET,
                { expiresIn: '1h' }
            );
            req.session.token = token;
            console.log("Generated Token:", token); // Log generated token
        } catch (error) {
            console.error("Error generating token:", error);
            return res.status(500).send("Error generating token.");
        }


        return res.send("Fetch Routes..");

    } catch (err) {
        console.error("In login Page:", err);
        // return res.status(500).send("An error occurred during login.");
    }
};

const logout = async (req,res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error("Error destroying session:", err);
            return res.status(500).send('Failed to log out.');
        }
        else {
            return res.send("Logout Sucessfully..");
        }
    });
};

module.exports = { login,logout };
