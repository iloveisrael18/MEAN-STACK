const { json } = require('body-parser');
const mongoose =require('mongoose');

mongoose.connect('mongodb://localhost:27017/CrudDB',(err)=> {
    if(!err)
        console.log('Mongo DB Connected');
    else
        console.log('Error DB Connection: ' + JSON.stringify(err,undefined,2))
});


module.exports = mongoose;