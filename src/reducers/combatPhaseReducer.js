export const combatPhaseReducer = (state = 'playerAttack', action) => {
  switch (action.type) {
    case 'enemyDefeated':
    case 'playerDamaged':
      return 'resolution';
    case 'enemyDamaged':
      return 'enemyAttack';
    case 'continueCombat':
    case 'newFight':
      return 'playerAttack';
    default:
      return state;
  }
};
