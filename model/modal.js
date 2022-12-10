const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ceme = new Schema({
    text:{
        type:String,
        require:true
    },
    timestamp:{
        type:String,
        default:Date.now()
    }
})

const Todo = mongoose.model("Todo",ceme);
module.exports = Todo;