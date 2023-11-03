 import Phaser from "phaser";
 
 class StartScreen extends Phaser.Scene {
    
            preload() {
               
            }

            create() {
                this.add.text(0, 0, "Start Screen");
                const newGameButton = new GameButton(this, 100, 100, 100, 100, 0x00ff00, "New Game", function(){
                    this.scene.start("NewGame");
                
                });
                
                this.add.existing(newGameButton);
                this.input.on("pointerdown", (e) => {
                    console.log(e);
                })               
            
            }
}

class GameButton extends Phaser.GameObjects.Rectangle {
    constructor(scene, x, y, width, height, color,  callback) {
        super(scene, x, y, width, height, color);
     
        this.setInteractive();
        this.on("pointerdown", callback);
        
        this.scene.add.existing(this.text);
    }

}

class NewGame extends Phaser.Scene{
    preload() {}

    create() {}
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: StartScreen,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    }
};

const game = new Phaser.Game(config);