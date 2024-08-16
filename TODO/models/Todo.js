
const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    task: String,
    status: {type :Boolean, default: false},
    userId: String

})

const Task = mongoose.model('Task', TodoSchema)

module.exports = Task