var emoji = require('node-emoji');
var colors = require('colors');
class Model {
    random(min,max) {
      return (Math.floor(Math.random() * (max - min + 1)) + min);
    }
    // findKopeh(map) {
    //
    // }
    board (map,i,j) {
      var board = JSON.parse(map);
      console.log(" " + emoji.get('information_source') + " Your selected Cell have this info : ");
      if (board[i][j]['type'] == "blue") {
         console.log(" Blue bird ".blue.bold);
      } else if (board[i][j]['type'] == "red") {
         console.log(" Red bird".red.bold);
      } else if (board[i][j]['type'] == "yellow") {
         console.log(" Yellow bird".yellow.bold);
      } else if (board[i][j]['type'] == "black") {
         console.log(" Black bird".black.bold);
      } else if (board[i][j]['type'] == "green") {
        console.log(" Green bird".green.bold);
      } else if (board[i][j]['type'] == "empty") {
        console.log(" Empty Cell !".white);
      } else if (board[i][j]['type'] == "rock") {
        console.log(" Rock Cell \n life_time : " + board[i][j]['life_time']);
      } else if (board[i][j]['type'] == "rocket") {
        if(board[i][j]['direction'] == 0)
          console.log(" " + emoji.get('rocket') + " Rocket Cell \n Direction : Vertical");
        else
          console.log(" " + emoji.get('rocket') + " Rocket Cell \n Direction : Horizontal");
      } else if (board[i][j]['type'] == "glass") {
        console.log(" Glass Cell \n life_time : " + board[i][j]['life_time']);
      } else if (board[i][j]['type'] == "bomb") {
        console.log(" " + emoji.get('bomb') + " Bomb Cell \n life_time : " + board[i][j]['life_time']);
      } else if (board[i][j]['type'] == "wood") {
        console.log(" Wood Cell \n life_time : " + board[i][j]['life_time']);
      } else if (board[i][j]['type'] == "laser") {
        console.log(" " + emoji.get('lightning') + " Laser Cell ");
      }
    }
    info(turn,score,goals){
      console.log(" " + emoji.get('chart_with_upwards_trend') + " Turns : ".bold + turn);
      console.log(" " + emoji.get('fire') + " Score : ".bold + score);
      console.log(" " + "Targets :\n" +
                        colors.red("  Red bird : ") + goals[0] + "\n" +
                        colors.blue("  Blue bird : ") + goals[1] + "\n" +
                        colors.yellow("  Yellow bird : ") + goals[2] + "\n" +
                        colors.black("  Black bird : ") + goals[3] + "\n" +
                        colors.green("  Green bird : ") + goals[4] + "\n" );
    }
}

module.exports = new Model();
