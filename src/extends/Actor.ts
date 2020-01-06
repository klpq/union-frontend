import { GameObjects } from "phaser";

class Actor extends GameObjects.Sprite {
  constructor({ game, x, y, image }) {
    super(game, x, y, image);
    game.add.existing(this);
  }
}

export default Actor;
