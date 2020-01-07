const serf = {
  name: "Serf",
  description: `This is owned by every person who can work at the dependence of another person. All serfs live in a workers house. `,
  level: 0,
  cost: 0,
  actions: [],
  residences: [],
  privileges: [],
  bussiness: 0,
  henchman: 0,
  experience: 0
};

const commoner = {
  name: "Commoner",
  description: `This is the title the player starts with. You can manage your business as well as accuse someone of a crime. You are entitled to live in Hut and can only own one business building. `,
  cost: 0,
  level: 1,
  actions: [],
  residences: [],
  privileges: [],
  bussiness: 1,
  henchman: 0,
  experience: 0
};

const yeoman = {
  name: "Yeoman",
  description: `This is the first title available for purchase with Gold. Once procured, it allows you to own another workshop in addition to your first. As a yeoman, are entitled live in an upgraded version of the hut, the House. `,
  level: 2,
  actions: [],
  residences: [],
  privileges: [],
  bussiness: 2,
  henchman: 0,
  cost: 500,
  experience: 600
};

const halfCitizen = {
  name: "Citizen without Full Rights",
  description: `This title upgrade allows you to apply for the lowest level Political Office on councils. There is no housing upgrade which can be made after attaining this title, however you are permitted to own an additional two buildings, totaling four.`,
  level: 3,
  actions: [],
  residences: [],
  privileges: [],
  bussiness: 4,
  henchman: 0,
  cost: 2000,
  experience: 800
};

const citizen = {
  name: "Citizen",
  description: `As a citizen, you can advance up the ranks of political offices. You are entitled to live in a Gabled House, as well as own three more buildings, totaling seven. `,
  level: 4,
  actions: [],
  residences: [],
  privileges: [],
  bussiness: 7,
  henchman: 0,
  cost: 6000,
  experience: 800
};

const freeCitizen = {
  name: "Free Citizen",
  description: `This title grants the ability to insult someone, which may result in a Duel. As Free Citizen you are entitled live Patrician House as well as own three more buildings, totaling ten. `,
  level: 5,
  actions: [],
  residences: [],
  privileges: [],
  bussiness: 10,
  henchman: 0,
  cost: 10000,
  experience: 1000
};

const patrician = {
  name: "Patrician",
  description: `As a Patrician, any Office application by yourself is viewed with high regard, increasing your chance to receive the desired Office. `,
  residences: [],
  privileges: [],
  level: 6,
  actions: [],
  bussiness: 15,
  henchman: 0,
  cost: 30000,
  experience: 1000
};

const noble = {
  name: "Noble",
  description: `As a Nobleman, you are now entitled to apply for Offices at the Imperial Level. You may also purchase firearms from the armory from now on (The selection depends of your Character's Imperial Fame).

  And at last, you may recruit an agent of courtship, which will help you court a specific character of the opposite gender (Order Recruiters). `,
  residences: [],
  privileges: [],
  level: 7,
  actions: [],
  bussiness: 30,
  henchman: 0,
  cost: 80000,
  experience: 0
};

const baron = {
  name: "Baron",
  description: `As a Baron, your family finally ascends to noble blood. Therefore, the law severity is now reduced by one level should you be accused of your commited crimes. `,
  residences: [],
  privileges: [],
  level: 8,
  actions: [],
  bussiness: 45,
  henchman: 0,
  cost: 150000,
  experience: 0
};

const baronLv2 = {
  name: "Allodial Baron",
  description: `Second grade of Barony, have to certain level renown in order to apply for the title. `,
  residences: [],
  privileges: [],
  level: 9,
  actions: [],
  bussiness: 55,
  henchman: 0,
  cost: 450000,
  experience: 0
};

const count = {
  name: "Allodial Baron",
  description: `Second grade of Barony, have to certain level renown in order to apply for the title. `,
  residences: [],
  privileges: [],
  level: 10,
  actions: [],
  bussiness: 100,
  henchman: 0,
  cost: 600000,
  experience: 0
};

const marquis = {
  name: "Marquis",
  description: `Margrave.  `,
  residences: [],
  privileges: [],
  level: 11,
  actions: [],
  bussiness: 200,
  henchman: 0,
  cost: 1000000,
  experience: 0
};

const duke = {
  name: "Prince",
  description: `Duke. The highest attainable title in this game `,
  residences: [],
  privileges: [],
  level: 12,
  actions: [],
  bussiness: 500,
  henchman: 0,
  cost: 1500000,
  experience: 0
};

const titles = [
  serf,
  commoner,
  yeoman,
  halfCitizen,
  citizen,
  freeCitizen,
  patrician,
  noble,
  baron,
  baronLv2,
  count,
  marquis,
  duke
];

export default titles;
