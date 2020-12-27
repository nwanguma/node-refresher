const { Schema, model } = require("mongoose");
const { validator } = require("validator");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "{VALUE} is not a valid email",
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 6,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
        trim: true,
      },
      access: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
      },
    },
  ],
});

const User = model("User", userSchema);

module.exports = {
  User,
};
