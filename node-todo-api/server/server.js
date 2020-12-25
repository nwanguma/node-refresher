const { model, connect } = require("mongoose");

connect("mongodb://localhost:27017/TaskApp");

const Task = model("Task", {
  title: {
    type: String,
    required: true,
    minLength: 1,
    trim: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  priority: {
    type: Number,
  },
});

// const newTask = new Task({
//   title: "Learn nodejs",
//   completed: false,
//   status: "in-progress",
//   priority: 2,
// })
//   .save()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

const newTask = new Task({
  title: "Learn aws",
  completed: true,
})
  .save()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
