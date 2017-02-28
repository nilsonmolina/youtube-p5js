var express = require('express');
var socket = require('socket.io');

var app = express();
var port = 3000;
var server = app.listen(port);

app.use(express.static('public'));

console.log("local server running on port " + port);

var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket) {
  // console.log(socket);
  console.log('new connection: ' + socket.id);

  socket.on('mouse', mouseMsg);

  function mouseMsg(data) {
    // console.log(data);
    // BROADCAST TO ALL CONNECTIONS, EXLUDING SENDER
    socket.broadcast.emit('mouse', data);
    // BROADCAST TO ALL CONNECTIONS, INCLUDING SENDER
    // io.sockets.emit('mouse', data);
  };
};
