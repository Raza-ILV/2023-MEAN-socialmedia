const mongoose = require("mongoose")
mongoose.set('strictQuery', true);
module.exports ={
    database: "mongodb://127.0.0.1:27017/social",
    secret: "any"
}