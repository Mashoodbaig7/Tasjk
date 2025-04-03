const express = require('express')
const myRouter =express.Router()
const signupcon = require('../controller/auth')

myRouter.post('/signup' , signupcon)

module.exports = myRouter