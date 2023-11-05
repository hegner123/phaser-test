import GameWindow from "../constants";

export class MenuButton extends Phaser.GameObjects.GameObject {
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    width: number,
    height: number,
    fillStyle: number,
    hoverFillStyle: number,
    alpha: number,
    text: string,
    loadScene: string
  ) {
    super(scene, "MenuButton");
    const defaultButton = new Phaser.GameObjects.Rectangle(
      scene,
      x,
      y,
      width,
      height,
      fillStyle,
      alpha
    );

    defaultButton.setInteractive({ cursor: "pointer" });
    defaultButton.on("pointerdown", () => scene.scene.start(loadScene));
    defaultButton.on("pointerover", (e) => {
      defaultButton.setFillStyle(hoverFillStyle);
    });
    defaultButton.on("pointerout", (e) => {
      defaultButton.setFillStyle(fillStyle);
    });
    scene.add.existing(defaultButton);
    const buttonText = new Phaser.GameObjects.Text(scene, x, y, text, {
      color: "#ffffff",
    });
    buttonText.setDepth(3);
    buttonText.setOrigin(0.5, 0.5);
    scene.add.existing(buttonText);
  }
}

export class TextField extends Phaser.GameObjects.GameObject {
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    width: number,
    height: number,
    fillStyle: number,

    alpha: number
  ) {
    super(scene, "TextField");
    const textContainer = new Phaser.GameObjects.Rectangle(
      scene,
      x,
      y,
      width,
      height,
      fillStyle,
      alpha
    );
    textContainer.setInteractive({ cursor: "text" });
    scene.add.existing(textContainer);
    const gameNameLabel = scene.add.text(
      GameWindow.xCenter - 350,
      100,
      "Game Name",
      {
        font: "32px Courier",
        color: "#ffffff",
      }
    );

    const gameNameText = scene.add.text(GameWindow.xCenter, 100, "", {
      font: "32px Courier",
      color: "#ffffff",
    });
    gameNameText.setOrigin(0.5, 0.5);
    if (!scene.input.keyboard) {
      console.log("No keyboard");
    } else {
      scene.input.keyboard.on("keyup", (e: KeyboardEvent) => {
        if (e.keyCode === 8 && gameNameText.text.length > 0) {
          gameNameText.text = gameNameText.text.substr(
            0,
            gameNameText.text.length - 1
          );
        } else if (e.keyCode === 32 || (e.keyCode >= 48 && e.keyCode < 90)) {
          gameNameText.text += e.key;
        }
      });
    }
  }
}

export class SaveButton extends Phaser.GameObjects.GameObject {
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    width: number,
    height: number,
    fillStyle: number,
    hoverFillStyle: number,
    alpha: number,
    text: string,
    loadScene: string
  ) {
    super(scene, "MenuButton");
    const defaultButton = new Phaser.GameObjects.Rectangle(
      scene,
      x,
      y,
      width,
      height,
      fillStyle,
      alpha
    );
  }
}
