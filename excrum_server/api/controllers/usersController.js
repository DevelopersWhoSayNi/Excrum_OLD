var mongoose = require("mongoose");
var Users = require("../models/usersModel");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.users_sign_up = (req, res) => {
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
};

exports.users_delete = (req, res) => {
  Users.remove({ _id: req.params.id })
    .exec()
    .then(() => {
      res.status(200).json({
        message: "User deleted"
      });
    })
    .catch(err => {
      if (err) res.status(500).json({ error: err.message });
    });
};

exports.users_login = (req, res) => {
  const jwt_key = process.env.JWT_KEY;
  Users.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length < 1) {
        res.status(401).json({ error: "Authentication failed" });
      } else {
        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
          if (err || !result)
            res.status(401).json({ error: "Authentication failed" });
          if (result) {
            const token = jwt.sign(
              {
                email: user[0].email,
                id: user[0]._id,
                userID: user[0].userID
              },
              jwt_key,
              {
                expiresIn: "1h"
              }
            );
            return res.status(200).json({ message: "Success", token });
          }
        });
      }
    })
    .catch(err => {
      if (err) res.status(500).json({ error: err.message });
    });
};
