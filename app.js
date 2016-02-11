/**
 * app.js
 *
 * description: this framework main file
 * ver: 0.0.1
 * author: kubotak-is
 *
 */

'use strict'

/**
 * require
 */
const koa   = require('koa');
const serve = require('koa-static');
const views = require('co-views');
const route = require(__dirname + '/app/routes/route');

// app instans
const app   = module.exports = koa();

// route
route(app);

// static file
app.use(serve(__dirname + '/public'));

app.listen(80);
