const express = require('express')
const router = express.Router()
const login = require('../routes/modules/login')

router.use('/', login)

module.exports = router