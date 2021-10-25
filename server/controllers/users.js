const express = require("express");
const model = require("../models/users");

const app = express.Router();

app
  .get("/", (req, res) => {
    res.send([model.GetAll()])
  })
  .get("/:user_id", (req, res) => {
    res.send([model.Get(req.params.user_id)])
  })
  
module.exports = app;