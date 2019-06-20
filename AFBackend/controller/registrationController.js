var User = require('../model/user');
var mongoose = require ('mongoose');


exports.addUser = function(req,res){
    return new Promise(function(resolve,reject){
        //User.find({})
            var user = new User(req.body);
            user.save(function () {
                    resolve(res.send({message : "User added successfully"}))
                }).catch (err=> {
                        reject(err);
                    });
                });
            }
