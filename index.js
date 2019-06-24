const express = require('express');
const reg = require('./routes/LoginRegistration/api');
const course = require('./routes/LoginRegistration/course');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//mongoose.connect('mongodb://localhost/trainReservation');
mongoose.connect('mongodb://localhost/courseWeb');
mongoose.Promise = global.Promise;
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());
app.use(function (err, req, res, next) {
    // console.log(err);
    res.status(422).send({error: err.message})
});

app.use('/courseWeb', course);
app.use('/courseWebs', reg);
app.listen(process.env.port || 4001, function () {

    console.log("Now listening for requests");
});