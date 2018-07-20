"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Users = new Schema({
  //   id: {
  //     type: ObjectID
  //   },
  name: {
    type: String,
    required: "Name"
  },
  email: {
    type: String,
    required: "Email"
  },
  password: {
    type: String,
    required: "Password"
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Tasks", TaskSchema);
