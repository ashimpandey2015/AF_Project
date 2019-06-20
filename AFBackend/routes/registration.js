var express = require('express');
var app = express.Router();
var regController = require('../controller/registrationController');

app.post('/add', function(req,res){
    const body = req.body;
    try{
        regController.addUser(body,response =>{
            res.set('Content-Type','application/json');
            res.send(response);
        });
    }catch(error){
        console.log(error);
    }
})

module.exports = app;
