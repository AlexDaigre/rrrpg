export const combatQueueReducer = (state = [], action) => {
  switch (action.type) {
    case 'enemyDefeated':
    case 'playerWin':
    case 'playerLoose':
    case 'enemyDamaged':
    case 'playerDamaged':
    case 'addMessage':
      return [...state, ...action.message];
    case 'popFromQueue':
      return state.slice(1);
    case 'newGame':
    case 'newFight':
      return [];
    default:
      return state;
  }
};
