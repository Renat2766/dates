const Router = require('express')
const router = new Router()
const friendsController = require('../controllers/friendsController')

router.post('/', friendsController.create)
router.get('/', friendsController.getAll)
router.get('/:id', friendsController.getOne)
router.delete('/:id', friendsController.delete)

module.exports = router