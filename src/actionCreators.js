import {
  createEnemys,
  PlayerCharecter,
  defeatedEnemyText,
  damageText,
  defeatedPlayerText,
} from './helperClassesFunctions';

export const newGame = () => {
  const enemys = createEnemys();
  const player = new PlayerCharecter('Bill', '1', '0', '20', '20', '20', [
    { name: 'Potion', owned: 0, use: () => {} },
    { name: 'Fire Bomb', owned: 0, use: () => {} },
  ]);
  return {
    type: 'newGame',
    enemys,
    player,
  };
};

export const popFromCombatQueue = message => {
  return {
    type: 'popFromQueue',
    message,
  };
};

export const playerAttack = (player, enemy) => {
  const totalDamageToEnemy = Math.ceil(
    (player.attack / enemy.defense) * (Math.random() + 0.5),  // eslint-disable-line
  );
  const newEnemyHealth = enemy.health - totalDamageToEnemy;

  if (newEnemyHealth <= 0) {
    return {
      type: 'enemyDefeated',
      enemyHealth: 0,
      message: [damageText(player.name, enemy.name, totalDamageToEnemy)],
    };
  }

  return {
    type: 'enemyDamaged',
    enemyHealth: newEnemyHealth,
    message: [damageText(player.name, enemy.name, totalDamageToEnemy)],
  };
};

export const playerTypingAttack = (player, enemy, score) => {
  const totalDamageToEnemy = Math.ceil(
    (player.attack / enemy.defense) * (1 + (score * 0.2)),  // eslint-disable-line
  );
  const newEnemyHealth = enemy.health - totalDamageToEnemy;

  if (newEnemyHealth <= 0) {
    return {
      type: 'enemyDefeated',
      enemyHealth: 0,
      message: [damageText(player.name, enemy.name, totalDamageToEnemy)],
    };
  }

  return {
    type: 'enemyDamaged',
    enemyHealth: newEnemyHealth,
    message: [damageText(player.name, enemy.name, totalDamageToEnemy)],
  };
};

export const enemyAttack = (player, enemy) => {
  const totalDamageToPlayer = Math.ceil(
    (enemy.attack / player.defense) * (Math.random() + 0.5),  // eslint-disable-line
  );
  const newPlayerHealth = player.health - totalDamageToPlayer;

  return {
    type: 'playerDamaged',
    playerHealth: newPlayerHealth,
    message: [damageText(enemy.name, player.name, totalDamageToPlayer)],
  };
};

export const resolveCombatRound = (player, enemy) => {
  if (player.health <= 0) {
    return {
      type: 'playerLoose',
      message: [defeatedPlayerText(player.name, enemy.name)],
    };
  }
  if (enemy.health <= 0) {
    return {
      type: 'playerWin',
      message: [defeatedEnemyText(player.name, enemy.name)],
      newScreen: 'victoryScreen',
      goldGain: enemy.goldValue,
    };
  }
  return { type: 'continueCombat' };
};

export const newFight = () => {
  return {
    type: 'newFight',
    newScreen: 'battleScreen',
  };
};

export const healPlayer = (player, amount) => {
  const newPlayerHealth =
    player.health + amount > player.maxHealth
      ? player.maxHealth
      : player.health + amount;
  return {
    type: 'playerHealed',
    playerHealth: newPlayerHealth,
  };
};

export const deductPlayerGold = (player, amount) => {
  return {
    type: 'deductPlayerGold',
    goldGain: amount * -1,
  };
};
