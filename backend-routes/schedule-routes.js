/**
 * Created by sim_one_n_only on 4/25/17.
 */
var express = require('express');
var Schedule = require('../models/schedule-schema');
var scheduleRoute = express.Router();
console.log(Schedule);


scheduleRoute

    .get("/", function (req, res) {
        req.query.user = req.user._id;
        Schedule.find(req.query, function (err, schedule) {
            res.send(schedule);
        })
    })

    .post("/", function (req, res) {
        newSchedule = new Schedule(req.body);
        newSchedule.user = req.user;
        newSchedule.save(req.query, function (err, savedSchedule) {
            res.send(savedSchedule);
        })
    })

    .put("/:id", function (req, res) {
        Schedule.findByIdAndUpdate(req.params.id, req.body, {new:true}, function (err, editedSchedule) {
            res.send(editedSchedule);
        })
    })

    .delete("/:id", function (req, res) {
        Schedule.findByIdAndRemove(req.params.id, function (err, deletedSchedule) {
            res.send(deletedSchedule);
        })
    });

module.exports = scheduleRoute;