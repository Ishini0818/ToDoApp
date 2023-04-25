const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  complited: {
    type: Boolean,
    required: true,
  },
  owner:{
    type: String,
    required:true,
  }
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
