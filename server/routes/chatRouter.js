const Router = require('express')
const router = new Router()
const chatRouter = require('../controllers/chatController')

router.post('/', chatRouter.create)
router.get('/', chatRouter.getAll)
router.get('/:id', chatRouter.getOne)
router.delete('/:id', chatRouter.delete)

module.exports = router