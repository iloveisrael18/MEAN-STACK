const express = require('express');
var router = express.Router();
var objectID= require('mongoose').Types.ObjectId;

var { Employee } = require('../models/employee');

router.get('/', (req,res)=> {
    Employee.find((err, docs) =>{
        if(!err){
            res.send(docs);

        }else{
            console.log('Error in Retrieving Employees' + JSON.stringify(err,undefined,2))
        }

    })

});


router.post('/', (req,res)=> {
   var emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary

   });
   emp.save((err,doc)=> {
        if(!err){
            res.send(doc);
        }else{
            console.log('Erro in adding employee' + JSON.stringify(err,undefined,2))
        }

   });
});

router.put('/:id', (req,res)=> {
    if(!objectID.isValid(req.params.id))
    console.log('No Record Found' + JSON.stringify(err,undefined,2))
    var emp = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary

   };

   Employee.findByIdAndUpdate(req.params.id, {$set: emp}, {new: true}, (err,doc)=>{
    if(!err){
        res.send(doc);
    }else{
        console.log('Erro in adding employee' + JSON.stringify(err,undefined,2))
    }

   })

 });

 router.delete('/:id', (req,res)=> {
    if(!objectID.isValid(req.params.id))
    console.log('No Record Found' + JSON.stringify(err,undefined,2))
    Employee.findByIdAndDelete(req.params.id,(err,doc)=>{
        if(!err){
            res.send(doc);
        }else{
            console.log('Error in Deleting employee' + JSON.stringify(err,undefined,2))
        }

    });
 });

module.exports = router;