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
const path  = require('path');
const serve = require('koa-static');
const views = require('co-views');

const app   = module.exports = koa();

// route
(require(path.resolve('app/routes', 'route')))(app);

app.listen(80);
