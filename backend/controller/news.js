const { json } = require("body-parser")
const express = require("express")
const router = express.Router()
const db = require("../model/database")
const Post = require("../model/post")


router.post("/add-post", (req, res, next) => {
    let newPost = new Post({
        authorName: req.body.authorName,
        authorImage: req.body.authorImage,
        postImage: req.body.postImage,
        title: req.body.title,
        article: req.body.article,
        comments: []
    })
    Post.addPost(newPost, (err, post) => {
        if(err){res.json({success: false, msg: "Faileg to add post"})}
        else{res.json({success: true, msg: "Post has been added"})}
    })
})
router.get("", (req, res, next) => {
    Post.find({}, (err, data) => {
        res.json({posts: data})
    })
    
})
router.get("/:id", (req, res, next) => {
    Post.getPostById(req.params.id, (err, post) => {
        if(err) throw err
        else{
            res.json({data: post})
        }
    })
})
router.put("/:id", (req, res, next) => {
    Post.getPostById(req.params.id, (err, post) => {
        if(err){throw err}
        else{
            let oldArr = post.comments
            console.log("---old---")
            console.log(oldArr)
            let newData = [req.body.comments]
            console.log("---new---")
            console.log(newData)
            let newArr = oldArr.concat(newData)
            console.log("---full---")
            console.log(newArr)
            Post.findOneAndUpdate({_id: req.params.id}, {
                $set: {
                    comments: newArr
                }
            }).then(() => {
                res.json({success: true, msg: "Comment added"})
            }).catch(err => {
                console.error(err);
                res.status(500).json({success: false, msg: "Failed to add comment"})
            }) 
        }
    })
})
module.exports = router