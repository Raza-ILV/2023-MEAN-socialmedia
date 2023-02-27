const mongoose = require("mongoose")
const db = require("./database")

const PostSchema = mongoose.Schema({
    authorName: {
        type: String,
        required: true
    },
    authorImage: {
        type: String,
        required: true
    },
    postImage: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    article: {
        type: String,
        required: true
    },
    comments: {
        type: [{
            author: String,
            img: String,
            text: String
        }],
        required: true
    },
}, {collection: "PR2Posts"})

const Post = module.exports = mongoose.model("Post", PostSchema)

module.exports.getPostById = function(id, callback){
    Post.findById(id, callback)
}
module.exports.getPostByAuthor = function(title, callback){
    const query = {title: title}
    Post.findOne(query, callback)
}
module.exports.addPost = function(newPost, callback){
    newPost.save(callback)
    console.log("---> Post added")
}