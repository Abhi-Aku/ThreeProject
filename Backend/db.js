const  mongoose = require("mongoose");

module.exports.db = mongoose.connect("mongodb://localhost:27017/ThreeProject").then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});
