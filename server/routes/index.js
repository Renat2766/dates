const Router = require('express')
const router = new Router()
const chatRouter = require('./chatRouter')
const friendsRouter = require('./friendsRouter')
const subscritionRouter = require('./subscritionRouter')
const userRouter = require('./userRouter')

router.use('/user', userRouter)
router.use('/chat', chatRouter)
router.use('/friends', friendsRouter)
router.use('/subscription', subscritionRouter)

module.exports = router