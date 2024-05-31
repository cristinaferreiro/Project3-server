const { Schema, model } = require("mongoose");

const userSchema = new Schema({

  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  birthyear: {
    type: Number,
    required: true
  },
  userimage: {
    type: String
  },
  backgrdimage: {
    type: String
  },
  userbio: {
    type: String
  }
}, {
  timestamps: true
});

module.exports = model("User", userSchema);
