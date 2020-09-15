/*
 * router.js - all routes
 */

// handle routes with express router
const express = require('express')
const router = express.Router()

// default to index and let react router work
router.get('*', (req, res) => {
    res.sendFile('/home/matt/repositories/lifestories/public')
})

module.exports = router
