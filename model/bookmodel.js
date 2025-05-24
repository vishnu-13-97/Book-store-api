const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({

title:{
type:String,
required:true,
trim:true,
maxLength:[100,'book title can not more than 100 charachters']
   },
author:{
    type:String,
    required:true,
    trim:true,
   },
year:{
        type:Number,
        required:true,
        min:[1000,'year must be atleast 1000'],
        max: new Date().getFullYear()
    }, 
imageId:{
type:mongoose.Schema.Types.ObjectId,
ref:"Image",
default:null
}, 
createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: null
        },
createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('Book',BookSchema);
