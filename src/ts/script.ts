import Phaser from "phaser";
import { MenuButton, TextField } from "./components/userInterface";
import GameWindow from "./constants";

class StartScreen extends Phaser.Scene {
  preload() {
    this.scene.add("NewGame", NewGame);
  }

  create() {
    const screenTitle = new Phaser.GameObjects.Text(
      this,
      GameWindow.xCenter,
      100,
      "Start Screen",
      {
        color: "#ffffff",
      }
    );

    screenTitle.setOrigin(0.5, 0.5);

    const newGameButton = new MenuButton(
      this,
      GameWindow.xCenter,
      150,
      100,
      50,
      0x3b4c72,
      0x3b4c02,
      1,
      "New Game",
      "NewGame"
    );
    const loadGameButton = new MenuButton(
      this,
      GameWindow.xCenter,
      208,
      100,
      50,
      0x3b4c72,
      0x3b4c02,
      1,
      "Load Game",
      "LoadGame"
    );

    this.add.existing(screenTitle);
    this.add.existing(newGameButton);
    this.add.existing(loadGameButton);
  }
}

class NewGame extends Phaser.Scene {
  preload() {}

  create() {
    const gameName = new TextField(
      this,
      GameWindow.xCenter,
      100,
      250,
      75,
      0x3b4c72,
      1
    );

    this.add.existing(gameName);
  }
}

const config = {
  type: Phaser.AUTO,
  width: GameWindow.width,
  height: GameWindow.height,
  scene: StartScreen,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
    },
  },
};

const game = new Phaser.Game(config);
