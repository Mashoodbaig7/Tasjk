const express = require('express')
const myRouter = require("./router/router")
const dbConnection = require('./DB/db')
const app = express()
app.use(express.json())
app.use(myRouter)
dbConnection()

app.listen(3000, () => console.log('server is running on 3000'))