const Router = require('express')
const router = new Router()

router.post('/chat')
router.get('/chat')
router.get('/:id')
router.delete('/:id')

module.exports = router