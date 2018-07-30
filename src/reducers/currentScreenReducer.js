export const currentScreenReducer = (state = 'StartScreen', action) => {
  switch (action.type) {
    case 'newFight':
    case 'playerWin':
    case 'switchScreen':
      return action.newScreen;
    case 'newGame':
      return 'battleScreen';
    default:
      return state;
  }
};
