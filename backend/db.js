const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://rafeeqsyedamjad:2PdDTvCjSq1mb8BE@cluster0.kzaz3fa.mongodb.net/")


// Create a Schema for Users

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required: true,
        unique: true,
        trim:true,
        lowercase:true,
        minLength
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

//    Export the mongoose model from the file (call it User)
// Create a Modal from the schema

const User = mongoose.model('User',userSchema);

model.exports = {
    User
};
