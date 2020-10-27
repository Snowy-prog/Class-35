var database;
var PlayerCount;
var form, player, game;
var allPlayers;

var Gamestate = 0;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  game = new Game();
  game.getState();
  game.start();
  
}

function draw(){
  background("white");
  
   if(playerCount === 4){
     game.updateState(1);
   }
   if(Gamestate === 1){
     game.play();
   }
  
}

