const Router = require('express')
const router = new Router()

router.post('/subscrition')
router.get('/subscrition')
router.get('/:id')
router.delete('/:id')

module.exports = router