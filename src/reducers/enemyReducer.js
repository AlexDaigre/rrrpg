export const enemyReducer = (state = [], action) => {
  switch (action.type) {
    case 'newGame':
      return action.enemys;
    case 'enemyDamaged':
    case 'enemyDefeated':
      return [
        {
          ...state[0],
          health: action.enemyHealth,
        },
        ...state.slice(1),
      ];
    case 'newFight':
      return [...state.slice(1)];
    default:
      return state;
  }
};
