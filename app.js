/**
 * Dependencias
 */

var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

/**
 * Rutas del servidor
 */

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

/**
 * Lógica de socket.io
 */

io.use(function(socket, next){
  // tu código acá...
});

io.on('connection', function (socket) { /* ... */});

server.listen(3333);