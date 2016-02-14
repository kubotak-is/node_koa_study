/**
 * oi.js
 *
 * description: socket.io middleware
 * ver: 0.0.1
 * author: kubotak-is
 *
 */
'use strict'

const socket = require('socket.io');

module.exports = (server) => {
  const io = socket.listen(server);

  io.on('connection', (socket) => {
    console.log('on user connected');

    //...
    socket.on('sample', (msg) => {
      console.log('sample: %d', msg);
      io.emit('sample', msg);
    });

  });
}
