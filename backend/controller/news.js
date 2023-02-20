const { json } = require("body-parser")
const express = require("express")
const router = express.Router()
const db = require("../model/database")
const Post = require("../model/post")


router.post("/add-post", (req, res, next) => {
    let newPost = new Post({
        authorName: req.body.authorName,
        authorImage: req.body.authorImage,
        title: req.body.title,
        likes: 0,
        article: req.body.article,
        comments: []
    })
    Post.addPost(newPost, (err, post) => {
        if(err){res.json({success: false, msg: "Faileg to add post"})}
        else{res.json({success: true, msg: "Post has been added"})}
    })
})
router.get("", (req, res, next) => {
    res.send("news")
})
router.put("/:id", (req, res, next) => {
    Post.getPostById(req.params.id, (err, post) => {
        if(err){throw err}
        else{
            Post.findOneAndUpdate({_id: req.params.id}, {
                $set: {
                    likes: post.likes + req.body.likes,
                    comments: req.body.comments.concat(post.comments)
                }
            }).then(() => {
                res.json({success: true, msg: "Comment added"})
            }).catch(err => {
                console.error(err);
                res.status(500)
                    .json({
                        success: false,
                        msg: "Failed to add comment"
                    })
            }) 
        }
    })
})
module.exports = router