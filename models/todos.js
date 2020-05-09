const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema
const todoSchema = new Schema({
    todo: {type:String, required:true},
    done: {type: Boolean, default:false},
},{timestamps:true});

//create model from Schema
const ToDo = mongoose.model('ToDo', todoSchema);

//Export Product model
module.exports = ToDo;