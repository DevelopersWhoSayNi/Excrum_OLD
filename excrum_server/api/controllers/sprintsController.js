var mongoose = require("mongoose");
var Sprints = require("../models/sprintsModel");

exports.sprint_add = (req, res) => {
  const sprint = new Sprints({
    _id: new mongoose.Types.ObjectId(),
    goal: req.body.goal,
    effort_forecast: req.body.effort_forecast
  });
  sprint
    .save()
    .then(() => {
      res.status(201).json({
        message: "Sprint created",
        sprint
      });
    })
    .catch(err => {
      res.status(400).send({ error: err.message });
    });
};
