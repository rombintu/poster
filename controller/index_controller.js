const { Post } = require("../models/tables")

class PostController {
    async index(req, res) {
        const posts = await Post.findAll()
        res.render('index', {
            isIndex: true,
            posts
        })
    }
}

module.exports = new PostController()