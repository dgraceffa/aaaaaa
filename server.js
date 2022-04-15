// require('./models/db');

const express = require('express');

// const employeeController = require('./controllers/employeeController');
var app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/EmployeeDB', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

app.listen(3000, () => {
  console.log(
    'Express server started on port : 3000'
  );
});

// app.use('/employee', employeeController);
