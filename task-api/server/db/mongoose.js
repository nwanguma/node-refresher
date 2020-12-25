const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/TaskApp");

module.exports = {
  mongoose,
};
