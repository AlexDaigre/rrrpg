export const gameHistoryReducer = (state = [], action) => {
  switch (action.type) {
    case 'enemyDefeated':
    case 'addGameHistory':
      return [action.message, ...state];
    case 'newGame':
    case 'ClearGameHistory':
      return [];
    default:
      return state;
  }
};
