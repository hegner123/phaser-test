import Phaser, { Textures } from "phaser";
import { Level } from "../../components/world";
import { Player, PlayerInterface } from "../../components/player";
import { SPRITE_SHEET, keyCodes } from "../../constants";

export class Level_1_Scene_1 extends Phaser.Scene {
  constructor() {
    super({ key: "Level_1_Scene_1" });
  }
  PlayerSprite: PlayerInterface;
  keys: any;
  keyLeft: boolean;
  keyRight: boolean;
  keyUp: boolean;
  keyDown: boolean;
  preload() {
    let sprites;
    if (!document.querySelector("#character_spriteSheet")) {
      console.log("no spritesheet");
    } else {
      sprites = document.querySelector("#character_spriteSheet");
    }

    this.textures.addSpriteSheet("playerSprite", sprites, {
      frameWidth: 32,
      frameHeight: 64,
    });
  }
  create() {
    const GameWorld = new Level(this, {});
    this.PlayerSprite = new Player(this, 100, 100, "playerSprite");
    this.keys = this.input.keyboard?.addKeys(
      "RIGHT, LEFT, UP, DOWN",
      true,
      true
    );

    this.anims.create({
      key: "idleRight",
      frames: this.anims.generateFrameNumbers("playerSprite", {
        start: SPRITE_SHEET.idle,
        end: SPRITE_SHEET.idle,
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "idleUp",
      frames: this.anims.generateFrameNumbers("playerSprite", {
        start: SPRITE_SHEET.idle + 1,
        end: SPRITE_SHEET.idle + 1,
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "idleLeft",
      frames: this.anims.generateFrameNumbers("playerSprite", {
        start: SPRITE_SHEET.idle + 2,
        end: SPRITE_SHEET.idle + 2,
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "idleDown",
      frames: this.anims.generateFrameNumbers("playerSprite", {
        start: SPRITE_SHEET.idle + 3,
        end: SPRITE_SHEET.idle + 3,
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "walkRight",
      frames: this.anims.generateFrameNumbers("playerSprite", {
        start: SPRITE_SHEET.walking,
        end: SPRITE_SHEET.walking + 5,
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "walkUp",
      frames: this.anims.generateFrameNumbers("playerSprite", {
        start: SPRITE_SHEET.walking + 6,
        end: SPRITE_SHEET.walking + 11,
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "walkLeft",
      frames: this.anims.generateFrameNumbers("playerSprite", {
        start: SPRITE_SHEET.walking + 12,
        end: SPRITE_SHEET.walking + 17,
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "walkDown",
      frames: this.anims.generateFrameNumbers("playerSprite", {
        start: SPRITE_SHEET.walking + 18,
        end: SPRITE_SHEET.walking + 22,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.add.existing(this.PlayerSprite);
  }
  update(time: number, delta: number): void {
    this.keyRight = this.keys.RIGHT.isDown;
    this.keyLeft = this.keys.LEFT.isDown;
    this.keyUp = this.keys.UP.isDown;
    this.keyDown = this.keys.DOWN.isDown;
    if (this.keyRight) {
      this.PlayerSprite.moveRight();
      this.PlayerSprite.anims.play("walkRight", true);
    }
    if (this.keyLeft) {
      this.PlayerSprite.moveLeft();
      this.PlayerSprite.anims.play("walkLeft", true);
    }
    if (this.keyUp) {
      this.PlayerSprite.moveUp();
      this.PlayerSprite.anims.play("walkUp", true);
    }
    if (this.keyDown) {
      this.PlayerSprite.moveDown();
      this.PlayerSprite.anims.play("walkDown", true);
    }
    if (!this.keyRight && !this.keyLeft && !this.keyUp && !this.keyDown) {
      switch (this.keys.RIGHT.plugin.prevCode) {
        case keyCodes.right:
          this.PlayerSprite.anims.play("idleRight", true);
          break;
        case keyCodes.left:
          this.PlayerSprite.anims.play("idleLeft", true);
          break;
        case keyCodes.up:
          this.PlayerSprite.anims.play("idleUp", true);
          break;
        case keyCodes.down:
          this.PlayerSprite.anims.play("idleDown", true);
          break;
        default:
          break;
      }
    }
  }
}
