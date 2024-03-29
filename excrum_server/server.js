var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var port = process.env.PORT || 8000;
require("dotenv").config();

var db = require("./config");
mongoose
  .connect(
    db.url,
    { useNewUrlParser: true }
  )
  .catch(err => {
    console.log("Fatal error: " + err);
  });

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var usersRoute = require("./api/routes/usersRoute");
var sprintsRoute = require("./api/routes/sprintsRoute");
usersRoute(app);
sprintsRoute(app);

app.listen(port, () => {
  console.log(`We are on port: ${port}`);
});
