const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    NIC: {
        type: String,
        required: true,
        //unique: true,
    },
    contactNo:{
        type: String,
        required: true
    },
    email:{
        type: String,
        //unique: true,
    },
    password: {
        type: String,
        required: true
    },
    userData:{
        userType : {
            type: String,
            required: true
        },
        courseFollowing:{
            type:String,

        },
        courseAssigned:{
            type:String,

        }
    }

});
const User = mongoose.model('user', UserSchema);
module.exports = User;