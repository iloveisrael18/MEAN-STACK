const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const { mongoose } = require('./db');
var employeeController = require('./controllers/employeeController.js')
var departmentController = require('./controllers/DepartmentController.js')


var app = express();
app.use(bodyParser.json());
app.use(cors());

app.listen(3000, ()=> console.log('server started in at port 3000'));

app.use('/employee', employeeController)
app.use('/department', departmentController)