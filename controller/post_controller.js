const { Post } = require("../models/tables")


class PostController {
    async createPost(req, res) {
        const {title, content, userId} = req.body
        const post = await Post.create({title, content, userId})
        res.json(post)
    }
    async getPostByUser(req, res) {
        const id = req.query.id
        const posts = await Post.findAll({where: {userId: id}})
        res.json(posts)
    }
    async getPostById(req, res) {
        const id = req.query.id
        const posts = await Post.findAll({where: {id}})
        res.json(posts)
    }
    // async deletePost(req, res) {
        
    // }
}

module.exports = new PostController()