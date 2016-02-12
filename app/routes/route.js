/**
 * route.js
 * description: routing file for http requests
 * author: kubotak-is
 */
'use strict'

/**
 * require
 */
const
    _router = require('koa-router'),
    router  = new _router();

/**
 * exports
 */
module.exports = (app, renderer) => {

  // root
  router.get('/', function* (next) {
    this.body = renderer.render('index.ect', {
      title: 'this is index'
    });
  });

  app.use(router.middleware());

}
