var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var witches, witch1, witch2, witch3, witch4;

var witch1Image,witch2Image,witch3Image,witch4Image;

var track , ground;

function preload(){

  track=loadImage("images/track.jpg");
  witch1Image=loadImage("images/witch1.png");
  witch2Image=loadImage("images/witch2.png");
  witch3Image=loadImage("images/witch3.png");
  witch4Image=loadImage("images/witch4.png");
  ground=loadImage("images/ground.png");

}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if (gameState===2){
    game.end();
  }
}
