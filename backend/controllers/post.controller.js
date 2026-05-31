const Post = require("../models/post.model");

const createPost = async(req, res) => {
    try {
        const {title, content, tags} = req.body;

        const post = await Post({
            title,
            content,
            tags,
            author : req.user.id
        })

        res.status(201).json(post)
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {createPost};