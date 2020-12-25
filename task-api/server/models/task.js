const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
  title: {
    type: String,
    minLength: 3,
    trim: true,
    required: true,
  },
  status: {
    type: String,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Task = model("Task", taskSchema);

module.exports = { Task };
