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
const cache  = require('koa-static-cache');
const route  = require(__dirname + '/app/routes/route');
const config = require(__dirname + '/config/const.json');

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

// cache
app.use(cache(__dirname + '/public'), {
  // 1 day
  maxAge: 1 * 24 * 60 * 60
});

let port = config.AppPort;
app.listen(port, () => {
  console.log('Server listeing at port %d', port);
});

module.exports = app;
