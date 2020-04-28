'use strict'
// modulos que necesitas

var express = require('express'),
    favicon = require('serve-favicon'),
    routes = require('./routes/index'), 
    faviconURL =  __dirname + '/public/img/node-favicon.png',
    viewDir = __dirname + '/views',
    port = (process.env.PORT || 3000),
    app = express() 

app
    .set('views', viewDir)
    .set('view engine', 'pug')
    .set('port', port)
    .use('/public', express.static(__dirname + '/public'))
    .use( favicon(faviconURL) )
    .use(routes)

module.exports = app


