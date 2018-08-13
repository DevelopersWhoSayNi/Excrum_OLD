var mongoose = require("mongoose"),
  Users = mongoose.model("Users");
module.exports = function(app) {
  // var users = require("../controllers/usersController");
  // app
  //   .route("/users")
  //   .post(users.registerUsers)
  //   .get(users.listUsers);

  //Extract to route file
  app.post("/users", (req, res) => {
    const user = new Users({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
    user
      .save()
      .then(() => {
        res.status(201).json({
          message: "Success",
          user
        });
      })
      .catch(err => {
        res.status(400).send({ error: err.message });
      });
  });

  app.get("/users", (req, res) => {
    Users.find({}, function(err, users) {
      if (err) res.send(err);
      res.json(users);
    });
  });
};
