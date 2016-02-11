/**
 * route.js
 * description: routing file for http requests
 * author: kubotak-is
 */
'use strict'

const route = require('koa-route');

module.exports = (app) => {
  // root
  app.use(
    route.get('/', function *() {
      this.body = 'Hello World!';
    })
  )
  // test page
  .use(
    route.get('/test/:name', function *(name) {
      this.body = 'my name is ' + name;
    })
  );

}
