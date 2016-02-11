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
const koa    = require('koa');
const views  = require('koa-views');
const common = require('koa-common');
const route  = require(__dirname + '/app/routes/route');

// app instans
const app   = module.exports = koa();

// template engin
app.use(
  views(__dirname + '/template', {
    map: { html: 'ect'}
  })
);

// route
route(app);

// static file
app.use(common.static(__dirname + '/public'));

app.listen(80);
