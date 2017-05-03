/**
 * Created by sim_one_n_only on 5/3/17.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var companySchema = new Schema({
    companyName: String,
    businessType: {
        type: String,
        required: true
    },
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
        type:Boolean,
        default: false
    }
})

module.exports = mongoose.model("Company", companySchema);