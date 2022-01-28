
var gameState = 0;
var playerCount;
var database;
var form, game, player;

var allPlayers;

function setup() {
    //Llamamos a la base de datos
    database = firebase.database();
    createCanvas(500,500);

    game = new Game();
    game.getState();
    game.start();

}

function draw(){
    if (playerCount === 4) {
        game.update(1);
    }

    if (gameState === 1) {
        clear();
        game.play();
    }
}
