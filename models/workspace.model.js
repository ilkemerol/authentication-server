const mongoose = require("mongoose");

const Workspace = mongoose.model(
  "Workspace",
  new mongoose.Schema({
    workspace: String,
  })
);

module.exports = Workspace;
