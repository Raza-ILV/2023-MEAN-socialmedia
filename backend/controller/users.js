const express = require("express")
const router = express.Router()
const passport = require("passport")
const db = require("../model/database")
const jwt = require("jsonwebtoken")
const User = require("../model/user")



router.post("/register", (req, res, next) => {
    let newUser = new User({
        username: req.body.username,
        password: req.body.password,
        imageURL: req.body.imageURL
    })
    User.addUser(newUser, (err, user) => {
        if(err){res.json({success: false, msg: "Faileg to registrate user"})}
        else{res.json({success: true, msg: "User has been registered"})}
    })
})



router.post("/auth", (req, res, next) => {
    const username = req.body.username
    const password = req.body.password

    User.getUserByUsername(username, (err, user) => {
        if(err){throw err}
        if(!user){return res.json({success: false, msg: "User not found"})}

        User.comparePassword(password, user.password, (err, isMatch) => {
            if(err){throw err}
            if(isMatch){
                const token = jwt.sign({data: user}, db.secret, {
                    expiresIn: 604800
                })
                res.json({
                    success: true,
                    token: "JWT " + token,
                    user: {
                        id: user._id,
                        username: user.username,
                        imageURL: user.imageURL,
                        posts: user.posts
                    }
                })
            } else {
                return res.json({success: false, msg: "Wrong password"})
            }
        })
    })
})



router.get("/profile", passport.authenticate("jwt", {session: false}), (req, res, next) => {
    res.json({user: req.user})
})

module.exports = router