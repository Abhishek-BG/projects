const mongoose = require('mongoose');

const mongoSchema = new mongoose.Schema({
    filename:{type:String,required:true},
    path:{type:String,required:true},
    size:{type:Number,required:true},
    uploadDate:{type:Date,default:Date.now},
}) 
const File = mongoose.model("File",mongoSchema);
module.exports =File;