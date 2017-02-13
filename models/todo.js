const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  name: { type: String, required: true, min: [5, 'Too short'] },
  description: {type: String, default: 'my task'},
  completed: {type: Boolean, default: false}
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo
