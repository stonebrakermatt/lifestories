/*
 * app.js - a simple node-express webserver
 */

// load config file and environment variables
const config = require('./config')
const env = process.env.NODE_ENV
const path = require('path')

// for req.body
const bodyParser = require('body-parser')

// load express with a logger and the routes config
const express = require('express')
const logger = require('morgan')
const router = require('./router')

// configure express to read x-www-urlformencoded and json data
const app = express()
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// serve static resources
app.use(express.static('/home/matt/repositories/lifestories/public'))

// express router config in separate file
app.use('/', router)

// determine host and port and listen for requests
const addr = config[env].addr, port = config[env].port
app.listen(port, addr, () => {
    console.log(`Running ${process.env.NODE_ENV} server:`)
    console.log(`Listening on ${addr}:${port}`) 
})
