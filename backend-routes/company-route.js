/**
 * Created by sim_one_n_only on 5/2/17.
 */
var express = require("express");
var companyRoutes = express.Router();
var Company = require("../models/company-schema");
var jwt = require("jsonwebtoken");
var config = require("../config");

companyRoutes.post("/companylogin", function (req, res) {
    console.log(req.body);
    Company.findOne({username: req.body.username}, function (err, company) {
        if (err) return res.status(500).send(err);
        if (!company) {
            return res.status(401).send({success: false, message: "Company not found!"});
        } else if (company) {
            if (company.password !== req.body.password) {
                return res.status(401).send({success: false, message: "Password Incorrect!"});
            } else {
                var token = jwt.sign(company.toObject(), config.secret, {expiresIn: "24h"});
                res.send({token: token, company: company.toObject(), success: true, message: "Here's your token!"});
            }
        }

    });
});

companyRoutes.post("/signup", function (req, res) {
    Company.find({username: req.body.username}, function (err, existingCompany) {
        if(err) return res.status(500).send(err);
        if(existingCompany.length) return res.send({success: false, message: "That company already exists!"});
        else {
            var newCompany = new Company(req.body);
            newCompany.save(function (err, companyObj) {
                if(err) return res.status(500).send(err);
                res.send({company: companyObj, message: "Successfully created a new company account!"});
            });
        }
    });
});

module.exports = companyRoutes;