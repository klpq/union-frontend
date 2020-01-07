import "phaser";

class Hud {
  player = null;
  game = null;
  elements = { money: null };

  constructor(game, player) {
    this.player = player;
    this.game = game;
    const money = new Phaser.GameObjects.Text(
      game,
      100,
      100,
      `Money: ${this.player.money}`,
      {}
    );
    this.elements = { money };
    game.add.existing(money);
  }

  update() {
    this.elements.money.text = `Money: ${this.player.money}`;
  }
}

export default Hud;
