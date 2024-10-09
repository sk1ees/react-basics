const { type } = require('@testing-library/user-event/dist/type');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const NotesSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
       
    },
    tag:{
        type: String,
       default: "general",
    },
    timestamp:{
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model('notes' , NotesSchema)