const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    userType:{
        type:String,
        required:true
    },
    userData:{
        courseFollowing:{
        type:String,
    
    },
        courseAssigned:{
        type:String,

    }
    }

});

const Instructor = mongoose.model('Student',StudentSchema);
model.exports=Instructor;