const Router = require('express');
const router = new Router()
const PostController = require('../controller/post_controller');

router.post('/post', PostController.createPost)
// router.get('/post', PostController.getPostByUser)


// router.delete('/post', PostController.deletePost)




module.exports = router