import { PlayerCharecter } from '../helperClassesFunctions';

export const playerReducer = (
  state = new PlayerCharecter('Bill', '1', '0', '20', '20', '20'),
  action,
) => {
  switch (action.type) {
    case 'playerHealed':
    case 'playerDamaged':
      return {
        ...state,
        health: action.playerHealth,
      };
    case 'createNewPlayerCharecter':
      return new PlayerCharecter(
        action.name,
        1,
        action.exp,
        action.health,
        action.attack,
        action.defense,
      );
    case 'deductPlayerGold':
    case 'playerWin':
      return {
        ...state,
        gold: state.gold + action.goldGain,
      };
    case 'newGame':
      return action.player;
    default:
      return state;
  }
};
