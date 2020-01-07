import Phaser from "phaser";

class Button extends Phaser.GameObjects.Text {
  constructor({ game, x, y, text, callback }) {
    super(game, x, y, text, {});
    this.setInteractive();
    this.on("pointerdown", () => {
      callback();
    });
    game.add.existing(this);
  }
}

export default Button;
