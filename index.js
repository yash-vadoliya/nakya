const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const route = require('./route/login.js');
const protectRoute = require('./route/index_route.js');

const app = express();
app.use(bodyParser.urlencoded({ extends : true}));
app.use(bodyParser.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to `true` if using HTTPS in production
}));

// app.use(express.static(path.join(__dirname, 'public')));

app.use(cors({ origin: 'http://localhost:3000/nakya' }));
app.set('view engine','ejs');

app.use('/nakya',route);
app.use('/nakya',protectRoute);

// app.listen(3000, '0.0.0.0',()=> {
//     console.log("Listening at http://192.168.0.178:3000"); //set ip address for live app
// })

app.listen(3000, () => {
    console.log("Listening at http://localhost:3000");
})
