/**
 * Created by sim_one_n_only on 4/26/17.
 */
var express = require("express");
var authRoutes = express.Router();
var User = require("../models/user-schema");
var jwt = require("jsonwebtoken");
var config = require("../config");

authRoutes.post("/login", function (req, res) {
    console.log(req.body);
    User.findOne({username: req.body.username}, function (err, user) {
        if(err) return res.status(500).send(err);
        if(!user) {
            return res.status(401).send({success: false, message: "User not found!"})
        }else if (user) {
            if (user.password !== req.body.password) {
                return res.status(401).send({success: false, message: "Password Incorrect!"})
            } else {
                var token = jwt.sign(user.toObject(), config.secret, {expiresIn: "24h"})
                res.send({token: token, user: user.toObject(), success: true, message: "Here's your token!"})
            }
        }
    });
});

authRoutes.post("/signup", function (req, res) {
    User.find({username: req.body.username}, function (err, existingUser) {
    if(err) return res.status(500).send(err);
    if(existingUser.length) return res.send({success: false, message: "That username is already taken!"});
    else {
    var newUser = new User(req.body);
    newUser.save(function (err, userObj) {
        if(err) return res.status(500).send(err);
        res.send({user: userObj, message: "Successfully created a new user"});
    });
    }
    })
})

module.exports = authRoutes;


