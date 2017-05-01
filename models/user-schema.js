/**
 * Created by sim_one_n_only on 4/26/17.
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: false
    }
})


module.exports = mongoose.model("User", userSchema);""
