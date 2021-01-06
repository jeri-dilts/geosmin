const { Router } = require('express')
const controllers = require('../controller/users')

const router = Router()

router.post('/sign-up', controllers.signUp)
router.post('/login', controllers.login)
router.get('/verify', controllers.verify)
router.post('/change-password', controllers.changePassword)

module.exports = router