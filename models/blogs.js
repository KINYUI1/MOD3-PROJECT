const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: String,
    summary:String,
    content:String,
    image:String,
    authorID:String
},{
    timestamps: true
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post;