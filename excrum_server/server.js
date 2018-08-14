var express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  Users = require("./api/models/usersModel"),
  bodyParser = require("body-parser");
var port = process.env.PORT || 8000;

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
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./api/routes/routesUsers"); //importing route
routes(app); //register the route

app.listen(port, () => {
  console.log(`We are on port: ${port}`);
});
