export class Enemy {
  constructor(name, health, attack, defense, goldValue) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
    this.goldValue = Math.ceil(goldValue * (Math.random() + 0.5));
  }
}

export class PlayerCharecter {
  constructor(
    name,
    level,
    exp,
    health,
    attack,
    defense,
    inventory = [],
    gold = 0,
  ) {
    this.name = name;
    this.level = level;
    this.exp = exp;
    this.health = health;
    this.maxHealth = health;
    this.attack = attack;
    this.defense = defense;
    this.inventory = inventory;
    this.gold = gold;
  }
}

export const joinedBattleText = (playerName, enemyName) =>
  `${playerName} joined in battle with a ${enemyName}!`;

export const defeatedEnemyText = (playerName, enemyName) =>
  `${playerName} has slain a ${enemyName}!`;

export const createEnemys = () => {
  return [
    new Enemy('Sickly Rat', 1, 1, 1, 2),
    new Enemy('Rat', 5, 1, 1, 5),
    new Enemy('Dire Rat', 10, 5, 5, 10),
    new Enemy('Adamant Dire Rat', 10, 5, 10, 15),
    new Enemy('Sanguineous Dire Rat', 15, 5, 5, 15),
    new Enemy('Vehement Dire Rat', 10, 10, 5, 15),
    new Enemy('+5 Purple Moon-Rat of Biting', 15, 15, 15, 25),
  ];
};

export const damageText = (actor1, actor2, damage) =>
  `${actor1} delt ${damage} to ${actor2}!`;

export const defeatedPlayerText = (playerName, enemyName) =>
  `${playerName} has been slain by a ${enemyName}!`;
