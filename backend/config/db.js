// import mongoose from "mongoose";
const mongoose = require('mongoose');

async function connectDB () {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/blogPlatformDb");
        console.log("successfully connected to the DB.");
    } catch (error) {
        console.log("Unable to connect to DB", error.message);
    }
}

module.exports = connectDB;