const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const middle = require('./Middleware/auth');

app.use('/', require('./routes/Login_route'));
app.use('/', middle.verifyToken, require('./routes/AddClass'));
app.use('/', middle.verifyToken, require('./routes/AddStudent'));
app.use('/', middle.verifyToken, require('./routes/AddTeacher'));
app.use('/', middle.verifyToken, require('./routes/TimeTable'));
app.use('/', middle.verifyToken, require('./routes/GetStats'));
app.use('/', middle.verifyToken, require('./routes/Attendance'));
app.use('/', middle.verifyToken, require('./routes/Notice'));

module.exports = app;
