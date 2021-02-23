const express = require('express');
var router = express.Router();
var objectID = require('mongoose').Types.ObjectId


var { Department } = require('../models/Department');
var date= new Date();


router.get('/',(req,res)=>{
    Department.find((err,doc)=>{
        if(!err){
            res.send(doc);
        }else{
            console.log('Error in retrieving Department' + JSON.stringify(err,undefined,2))
        }

    });

});



router.post('/',(req,res)=>{
    var dep = new Department({
        DepartmentName: req.body.DepartmentName,
        Description: req.body.Description,
        //DateCreated: req.body.DateCreated,
        CreatedBy: req.body.CreatedBy

    });
    
    dep.save((err,doc)=> {
        if(!err){
            res.send(doc);
        }else{
            console.log('Error in adding Department' + JSON.stringify(err,undefined,2))
        }

   });
    
});


module.exports = router;