'use strict'

var express = require('express'),
    router = express.Router()

router
    .get('/', (req, res) => res.render('ppal.pug'))
    .get('/proyectos', (req, res) => res.render('full_img_proy.pug'))

module.exports = router
