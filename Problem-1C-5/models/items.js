const mongoose = require('mongoose')

const Itemschema = new mongoose.Schema({
    name: {type:String,required:true},//todo list task name
    status:{type:Boolean,required:true} //status 
})

module.exports = mongoose.model('Item',Itemschema);
//collection name is Item