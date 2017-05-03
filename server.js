/**
 * Created by sim_one_n_only on 4/25/17.
 */
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var morgan = require("morgan");
var path = require("path");
var scheduleRoute = require("./backend-routes/schedule-routes");
var config = require("./config");
var expressJwt = require("express-jwt");


var app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use("/api", expressJwt({secret: config.secret}));
app.use("/api/booking", require("./backend-routes/schedule-routes"))

var port = process.env.PORT || 7000;

mongoose.connect(config.database, function (err) {
    if(err) throw err;
    console.log("Successfully connected to database");
})

app.use("/auth", require("./backend-routes/auth-route"));
app.use("/company-auth", require("./backend-routes/company-route"));

app.listen(port, function () {
    console.log("you're app is listening on port " + port)
})