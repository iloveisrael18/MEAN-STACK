const mongoose = require('mongoose');
var dateformat = require('dateformat');

// var DepartmentSchema = new mongoose.Schema({
//     DepartmentName: String,
//     Description: String,
//     DateCreated: {type: Date, default: dateformat(JSON.stringify(new Date().toString()), 'yyyy-mm-dd')},
//     CreatedBy: String,

// });



const Department = mongoose.model('Department', {
    DepartmentName: String,
    Description: String,
    DateCreated: {type: Date, default: dateformat(JSON.stringify(new Date().toString()), 'yyyy-mm-dd')},
    CreatedBy: String,

});

module.exports = {
    Department: Department

}