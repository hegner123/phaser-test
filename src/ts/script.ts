import Phaser from "phaser";
import { MenuButton, TextField } from "./components/userInterface";
import GameWindow from "./constants";
import Scenes from "./scenes";

const config = {
  type: Phaser.AUTO,
  width: GameWindow.width,
  height: GameWindow.height,
  scene: Scenes,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
    },
  },
};

const game = new Phaser.Game(config);
