/**
 * route.js
 * description: routing file for http requests
 * author: kubotak-is
 */
'use strict'

/**
 * require
 */
const route = require('koa-route');

/**
 * exports
 */
module.exports = (app) => {
  // root
  app.use(
    route.get('/', function *() {
      yield this.render('index.ect', {
        title: 'this is index'
      });
    })
  )
  // test page
  .use(
    route.get('/test/:name', function *(name) {
      this.body = 'my name is ' + name;
    })
  );

}
