export default class Player {
  money = 3000;
  fame = 0;
  title = 0;

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

  removeFame = (fame: integer): void => {
    this.fame -= fame;
  };

  buyTitle = (): void => {
    this.title++;
  };
}
