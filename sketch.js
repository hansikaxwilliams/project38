
var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var horses,horse1,horse2, horse3, horse4;
var track, horse1_img,horse2_img,horse3_img,horse4_img;

function preload(){
  track=loadImage("horseeee.jpg");
  horse1_img=loadImage("horsiiii.png");
horse2_img=loadImage("horsiiii.png");
  horse3_img=loadImage("horsiiii.png");
  horse4_img=loadImage("horsiiii.png");
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
  if(gameState===2){
    game.end();
  }
}
