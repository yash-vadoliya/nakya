const jwt = require('jsonwebtoken');
// const Admin = require('../Models/Adminlogin');

const authenticateToken = async (req, res, next) => {
    // const token = req.headers.authorization?.split(' ')[1];
    const token = req.session.token;

    console.log(token);

    if (!token) {
        return res.status(401).json({ status: 'error', message: 'Login First..' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ status: 'error', message: 'Invalid token' });
        return res.send('Please, Login First..');
    }
};

module.exports = {authenticateToken};