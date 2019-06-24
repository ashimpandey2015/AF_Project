const express = require('express');
const router = express.Router();
const User = require('../../models/LoginRegistration/user');
const Courses = require('../../models/Courses/courses');

const Login = require('../../models/login');
var nodemailer = require('nodemailer');

// router.get('/trains', function(req, res, next){    //get all trains in the database
//     Train.find({}).then(function(train) {
//         res.send(train);
//     });
// });
//
// router.post('/trains', function (req, res, next) {   //add trains to the db (optional)
//     var train = new Train(req.body); //
//     train.save().then(function (train) {
//         res.send(train);
//     })
//
// });

//User registration
// router.post('/register', function (req, res) {      //some fields are mandatory for the user to enter
//     var registration = new User(req.body);
//     registration.save().then(function (err, registration) {
//         if(err){
//             res.status(500).send({message:err})
//         }
//         else {
//             res.send(registration);
//         }
//     });
// });

router.post('/login', function (req, res) {     //Login validation for duplicate emails, duplicate userNames ,NIC
    var email = req.body.email;                 //All these should be unique values
    var password = req.body.password;

    User.findOne({'email': email, 'password': password}, function (err, user) {
        if (err) {
            return res.status(500).send();
        }
        if (!user) {
            return res.status(404).send({message: "Invalid User"});
        } else {
            return res.status(200).send({message: "User with email " + email + " logged in successfully"});

        }
    })
});


// router.post('/payment/dialog', function (req, res, next) {        // an email is sent upon every success payment
//     var payment = new Payment(req.body);
//     payment.save().then(function (payment) {
//         var transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 user: 'rukshanthiwanka.tech12@gmail.com',
//                 pass: ''
//             }
//
//         });
//         const mailOptions = {
//             from: 'rukshanthiwanka.tech12@gmail.com', // sender address
//             to: 'rukshanthiwanka@ymail.com', // list of receivers
//             subject: 'Ticket Booking Confirmation', // Subject line
//             html: '<p>You have successfully booked the tickets</p>'// plain text body
//         };
//         transporter.sendMail(mailOptions, function (err, info) {
//             if (err)
//                 console.log(err)
//             else
//                 console.log(info);
//         });
//         res.send(payment);
//     })
//
// });
// router.get('/government', function (req, res, next) {    //checks whether the user is a government employee
//     var name = req.body.userName;                        // If the particular user is in the collection governmentEmployee,
//     var NIC = req.body.NIC;                              // he/she is taken as a government employee
//
//     GovernmentEmployees.findOne({userName : name, NIC : NIC }).then(function (err, government) {
//         if(err){
//             res.status(500).send({message:err})
//         }
//         if(!government){
//             return res.status(404).send({message:"User is not a government employee"});
//         }
//         else {
//             res.send({message : "User is a government employee"});
//         }
//     });
// });
// router.post('/government', function (req, res,next) {      //some fields are mandatory for the user to enter
//     var government = new GovernmentEmployees(req.body);
//     government.save().then(function (err, government) {
//         if(err){
//             res.status(500).send({message:err})
//         }
//         else {
//             res.send(government);
//         }
//     });
// });

router.post('/registerUser', function (req, res) {
    var user = new User(req.body);
    user.save().then(function (user, err) {
        if (err) {
            res.status(500).send({message: err, data:"An error occured"})
        } else {
            res.status(200).send({message: "User added successfully", data: user});

            if (req.body.userData.userType === 'instructor') {

                const transporter = nodeMailer.createTransport({
                    service: 'Zoho',
                    host: 'smtp.zoho.com',
                    port: 587,
                    secureConnection: false,
                    auth: {
                        user: 'rukshan@mobisec.lk',
                        pass: 'ruki@321'
                    }
                });
            }

                const mailOptions = {
                    from: 'rukshan@mobisec.lk', // sender address
                    to: 'rukshanthiwanka.tech12@gmail.com', // list of receivers
                    subject: 'Added as an instructor', // Subject line
                    html: '<p>You have been successfully added as an instructor</p>'// plain text body
                };
                transporter.sendMail(mailOptions, function (err, info) {
                    if (err)
                        console.log(err);
                    else
                        console.log(info);
                });
            }


    })

});
router.get('/users', function(req, res){    //get all users in the database
    User.find({}).then(function(user) {
        res.send(user);
    });
});
router.get('/users/:email', function(req, res) { //get all users in the database
    let email = req.params.email;
    User.findById(email).then(function (user) {
        if (user) {
            User.findOne({'password': password}, function (err, user) {
                res.send(user);

            })
        }
    })
})


module.exports = router;









