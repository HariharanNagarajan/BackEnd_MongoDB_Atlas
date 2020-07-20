/*const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db.js');
var employeeController = require('./controller/employeeController.js');

var app = express();

app.use(bodyParser.json)

app.listen(3000, (err) => {
    console.log('server started on port : 3000');
 });
app.use('/employees', employeeController);*/

const express = require('express');
const connectDB = require('./models/employee');
const bodyParser = require('body-parser');

const app = express();


connectDB();
app.use(express.json({ extended: false}));
app.use('/API/UserModel', require('./API/User'));
const Port = process.env.Port || 3000;

app.listen(3000, () => console.log('Server started'))


