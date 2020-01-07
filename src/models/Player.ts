import data from "../data";

export default class Player {
  money = 3000;
  fame = 0;
  exp = 0;
  titleLevel = 1;
  actor = null;

  constructor() {}

  addMoney = (money: integer): void => {
    this.money += money;
  };

  removeMoney = (money: integer): void => {
    this.money -= money;
  };

  addFame = (fame: integer): void => {
    this.fame += fame;
  };

  addExp = (exp: integer): void => {
    this.exp += exp;
  };

  removeExp = (exp: integer): void => {};

  removeFame = (fame: integer): void => {
    this.fame -= fame;
  };

  addActor = (actor): void => {
    this.actor = actor;
  };

  buyTitle = (): void => {
    const nextTitle = data.titles[this.titleLevel + 1];
    if (this.money >= nextTitle.cost) {
      this.titleLevel++;
      this.removeMoney(nextTitle.cost);
      this.addExp(nextTitle.experience);
    }
  };

  get title(): {} {
    return data.titles[this.titleLevel];
  }
}
