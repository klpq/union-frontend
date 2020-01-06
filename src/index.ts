import { Game, Scene, Geom } from "phaser";
import Actor from "./extends/Actor";
import "./index.css";

// @ts-ignore
import playerIcon from "./assets/idle.png";
import Player from "./models/Player";
class MainScene extends Scene {
  public constructor() {
    super({ key: "MainScene" });
  }

  public preload(): void {
    this.load.image("player", playerIcon);
  }

  public create(): void {
    new Actor({ game: this, x: 100, y: 100, image: "player" });
    const player = new Player();

    this.input.on("pointerdown", () => {
      player.addMoney(20);
      console.log(player.money);
    });
  }
}

new Game({
  width: 800,
  height: 600,
  parent: "content",
  backgroundColor: 0xffffff,
  scene: MainScene
});
