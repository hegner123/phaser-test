import Phaser, { Textures } from "phaser";
import { Level } from "../../components/world";
import { Player } from "../../components/player";
import { placeholderImageElement } from "../../constants";

export class Level_1_Scene_1 extends Phaser.Scene {
  constructor() {
    super({ key: "Level_1_Scene_1" });
  }
  preload() {
    let sprite;
    if (!document.querySelector("#character_idle")) {
      sprite = placeholderImageElement;
    } else {
      sprite = document.querySelector("#character_idle");
    }
    this.textures.addSpriteSheet("player", sprite, {
      frameWidth: 32,
      frameHeight: 64,
    });
  }
  create() {
    const GameWorld = new Level(this, {});
    const PlayerSprite = new Player(this, 100, 100, "player");

    this.add.existing(PlayerSprite);
  }
  update(time: number, delta: number): void {}
}
