class Game {
    constructor() {

    }

    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data) {
            gameState = data.val()
        })
    }

    update(state) {
        //   / = base de datos
        database.ref('/').update({
            gameState: state
        });
    }

    async start() {
        if (gameState === 0) {
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once('value');

            if (playerCountRef.exists() ) {
                playerCount = playerCountRef.val();
                player.getCount();
            }

            form = new Form();
            form.display();
        }
    }

    play() {
        form.hide();
        textSize(30);
        text("Juego iniciado", 120, 100);

        Player.getPlayerInfo();

        //Si todos ya están definidos, crear variable de posición
        if (allPlayers != undefined) {
            var displayPosition = 130;
            displayPosition += 20;

            //plr - el jugador ya está definido
            textSize(15);
            text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120, displayPosition);
        }
    }
}