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
const
    koa    = require('koa'),
    common = require('koa-common'),
    cache  = require('koa-static-cache'),
    config = require(__dirname + '/config/const.json');

// app instans
const app = module.exports = koa();

// template engin
let renderer = require(__dirname + '/app/middleware/render.js');
// routing
require(__dirname + '/app/routes/route.js')(app, renderer);

// static file
app.use(common.static(__dirname + '/public'));

// cache
app.use(cache(__dirname + '/public'), {
  // 1 day
  maxAge: 1 * 24 * 60 * 60
});

// socket.io
let server = require('http').Server(app.callback());
require(__dirname + '/app/middleware/io.js')(server);

// error handling
app.on('error', (err) => {
  console.error('server error', err);
});

let port = config.AppPort;
app.listen(port, () => {
  console.log('Server listeing at port %d', port);
});

module.exports = app;
