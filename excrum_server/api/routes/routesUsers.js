var mongoose = require("mongoose");
var Users = require("../models/usersModel");
const bcrypt = require("bcrypt");

module.exports = function(app) {
  // var users = require("../controllers/usersController");
  // app
  //   .route("/users")
  //   .post(users.registerUsers)
  //   .get(users.listUsers);

  app.post("/signup", (req, res) => {
    Users.find({ email: req.body.email })
      .exec()
      .then(user => {
        if (user.length > 0) {
          return res.status(409).send({ error: "E-mail already exists" });
        } else {
          bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
              return res.status(500).send({
                error: err.message
              });
            } else {
              const user = new Users({
                _id: new mongoose.Types.ObjectId(),
                userID: req.body.userID,
                name: req.body.name,
                email: req.body.email,
                password: hash
              });
              user
                .save()
                .then(() => {
                  res.status(201).json({
                    message: "User created",
                    user
                  });
                })
                .catch(err => {
                  res.status(400).send({ error: err.message });
                });
            }
          });
        }
      })
      .catch(err => {
        if (err) return res;
      });
  });

  app.post("/login", (req, res) => {
    Users.find({ email: req.body.email })
      .exec()
      .then(user => {
        if (user.length < 1) {
          res.status(401).json({ error: "Auth failed" });
        } else {
          bcrypt.compare(req.body.password, user[0].password, (err, result) => {
            if (err) res.status(401).json({ error: "Auth failed" });
            if (result) {
              return res.status(200).json({ message: "Success" });
            }
          });
        }
      })
      .catch(err => {
        if (err) res.status(500).json({ error: err.message });
      });
  });

  app.get("/users", (req, res) => {
    Users.find({}, function(err, users) {
      if (err) res.send(err);
      res.json(users);
    });
  });
};
