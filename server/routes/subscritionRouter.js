const Router = require('express')
const router = new Router()
const subscritionController = require('../controllers/subscritionController')

router.post('/', subscritionController.create)
router.get('/', subscritionController.getAll)
router.get('/:id', subscritionController.getOne)
router.delete('/:id', subscritionController.delete)

module.exports = router