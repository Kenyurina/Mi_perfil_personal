'use strict'

var express = require('express'),
    router = express.Router()

router
    .get('/', (req, res) => res.render('web.pug'))

module.exports = router
