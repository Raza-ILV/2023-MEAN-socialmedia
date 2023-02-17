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
    title: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        required: true
    },
    article: {
        type: String,
        required: true
    },
    comments: {
        type: [[String]],
        required: true
    },
})

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