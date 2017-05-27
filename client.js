// version 0.0.1
const config = require('./config.json');
const AI = require('./AI.js');
const socket = require('socket.io-client')(config.HOST);
console.log('game starting...');
socket.on('connect', function() {
    console.log(' => [connected]');
    socket.emit('init', config.TOKEN , function (){
});

socket.on('result', function(data) {
   var result = AI.turn(data['data'].toString(),data['turn_number'],data['score'],data['goals']);
   socket.emit('touch', config.TOKEN, result[0], result[1]);
 });
});

socket.on('reconnected', function() {
    console.log(' => [Reconnected]');
});
socket.on('disconnect', function() {
    console.log(' => [disconnect]');
});
