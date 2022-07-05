const mongoose = require("mongoose");

const toDocshema =  mongoose.Schema({
    text: String,
    completed: {
        type: Boolean,
        default: false
    }
})

const ToDo = mongoose.model("toDo", toDocshema);

module.exports = ToDo;