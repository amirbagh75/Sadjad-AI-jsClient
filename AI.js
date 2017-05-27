///**********************************///
// you should write your AI algorithm here in the turn() function !
///**********************************///
var Model = require('./Model.js');
var emoji = require('node-emoji');

class AI {
  turn(map,turn,score,goals){
     console.log(" ----------------- ");
     var rand1 = Model.random(0,9);
     var rand2 = Model.random(0,9);
     // you get info about your turn and scores in this function :

     Model.info(turn,score,goals);
     // you get info about your touch in this function :

     Model.board(map,rand1,rand2);
     // you return your touch cell here . you should choose best home :/
     return [rand1,rand2];
   }
}
module.exports = new AI();
