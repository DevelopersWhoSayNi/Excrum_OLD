const Users = require("./api/models/users");
const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
  const user = new Users({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });
  user
    .save()
    .then(result => {
      res.status(201).json({
        message: "Success",
        user
      });
    })
    .catch(() => {
      //throw exception
    });
});

module.exports = router;
