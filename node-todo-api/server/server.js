const { model, connect } = require("mongoose");

connect("mongodb://localhost:27017/TaskApp");

const Task = model("Task", {
  title: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
  status: {
    type: String,
  },
  priority: {
    type: Number,
  },
});

const newTask = new Task({
  title: "Learn nodejs",
  completed: false,
  status: "in-progress",
  priority: 2,
})
  .save()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
