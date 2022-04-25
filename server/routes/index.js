const Router = require('express')
const router = new Router()

router.use('/login')
router.use('/registration')
router.use('/chat')
router.use('/profile')
router.use('/exit')
router.use('/friends')
router.use('/subscription')

module.exports = router