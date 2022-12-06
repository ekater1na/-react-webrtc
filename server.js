const pass = require('path');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const PORT = process.env.PORT || 3001;

function getClientRooms() {
  const {rooms} = io.sockets.adapter;

  return Array.from(rooms.keys)
}

function shareRoomsInfo() {
  io.emit('', {
    rooms: getClientRooms()
  })
}

io.on('connection', (socket) => {
  console.log('Socket connected');
});

server.listen(PORT, () => {
  console.log(`Sever started on port: ${PORT}`);
});
