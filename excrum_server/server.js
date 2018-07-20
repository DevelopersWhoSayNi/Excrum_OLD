var express = require("express");
var app = express();
var port = process.env.PORT || 8000;

app.get("/", (req, res) => res.send("NI!"));

app.listen(port);
console.log(`We run at port: ${port}`);
