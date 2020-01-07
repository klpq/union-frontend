import Phaser from "phaser";
// @ts-ignore
import playerIcon from "./assets/idle.png";
import "./index.css";

import Actor from "./extends/Actor";
import Button from "./extends/Button";
import Player from "./models/Player";

class MainScene extends Phaser.Scene {
  player = null;
  moneyText = null;
  titleText = null;

  public constructor() {
    super({ key: "MainScene" });
  }

  public preload(): void {
    this.load.image("player", playerIcon);
  }

  public create(): void {
    const actor = new Actor({ game: this, x: 100, y: 100, image: "player" });
    this.player = new Player();
    this.player.addActor(actor);

    new Button({
      game: this,
      x: window.innerWidth - 500,
      y: 50,
      text: "log player",
      callback: () => {
        console.dir(this.player, this.player.title);
      }
    });
    new Button({
      game: this,
      x: window.innerWidth - 500,
      y: 100,
      text: "increase money",
      callback: () => {
        this.player.addMoney(100);
        this.moneyText.text = `Money: ${this.player.money}`;
      }
    });

    new Button({
      game: this,
      x: window.innerWidth - 500,
      y: 150,
      text: "increase title",
      callback: () => {
        this.player.buyTitle();
        this.titleText.text = `Title: ${this.player.title.name}`;
        this.moneyText.text = `Money: ${this.player.money}`;
      }
    });

    this.moneyText = this.add.text(
      window.innerWidth - 500,
      400,
      `Money: ${this.player.money}`
    );

    this.titleText = this.add.text(
      window.innerWidth - 500,
      450,
      `Title: ${this.player.title.name}`
    );
  }

  public update(): void {}
}

new Phaser.Game({
  width: window.innerWidth,
  height: window.innerHeight,
  parent: "content",
  backgroundColor: "#777",
  scene: MainScene
});
