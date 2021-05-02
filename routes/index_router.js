const Router = require('express')
const router = new Router()
const IndexController = require('../controller/index_controller')


router.get('/', IndexController.index)


module.exports = router