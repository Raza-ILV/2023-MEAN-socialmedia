const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const db = require("./database")

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        default: "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg",
        required: true
    },
    posts: {
        type: [String],
        required: true
    },
})

const User = module.exports = mongoose.model("User", UserSchema)

module.exports.getUserById = function(id, callback){
    User.findById(id, callback)
}
module.exports.getUserByUsername = function(username, callback){
    const query = {username: username}
    User.findOne(query, callback)
}
module.exports.addUser = function(newUser, callback){
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err){throw err}
            newUser.password = hash
            newUser.save(callback)
        })
    })
    console.log("---> User added")
}
module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if(err){throw err}
        callback(null, isMatch)
    })
    console.log("---> User logged in")
}