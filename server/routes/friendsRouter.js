const Router = require('express')
const router = new Router()

router.post('/friends')
router.get('/friends')
router.get('/:id')
router.delete('/:id')

module.exports = router