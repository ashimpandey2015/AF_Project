const express = require('express');
// const routes = require('./routes');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/courseWeb');
mongoose.Promise = global.Promise;
app.use(express.static('public'));
app.use(bodyParser.json());

app.use(function (err, req, res) {
   // console.log(err);
    res.status(422).send({error: err.message})
});

//app.use('/api', routes);

app.listen(process.env.port || 4000, function () {

    console.log("Now listening for requests");
})