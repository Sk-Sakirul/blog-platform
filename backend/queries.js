const User = require("../models/user.model");
const Post = require("../models/post.model");

// all posts with more than 10 likes, 
// sorted by likes descending, 
// returning only the title, likes, 
// and creation date.

const getPopularPosts = async () => {
    return await Post.find({likeCount : {$gt : 10}}, {title: 1, likeCount : 1, createdAt: 1}).sort({likeCount : -1});
}

// 2
const getGmailUser = async () => {
    return User.find({
        email : /@gmail\.com$/i,
        role : "user"
    })
}

module.exports = {getPopularPosts, getGmailUser}