//import mongoose from 'mongoose';

const mongoose = require("mongoose")
const { Schema } = mongoose;

const student = new Schema({
    name: String,
    registrationNumber: String,
    marks: Number
});

module.exports = mongoose.model("studentDetails",student,"SL-LAB")