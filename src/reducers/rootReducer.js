import { combineReducers } from 'redux';
import { playerReducer } from './playerCharecterReducer';
import { enemyReducer } from './enemyReducer';
import { gameHistoryReducer } from './gameHistoryReducer';
import { combatQueueReducer } from './combatQueueReducer';
import { currentScreenReducer } from './currentScreenReducer';
import { combatPhaseReducer } from './combatPhaseReducer';
import { typingAttackReducer } from './typingAttackReducer';

const rootReducer = combineReducers({
  player: playerReducer,
  enemyArray: enemyReducer,
  currentScreen: currentScreenReducer,
  combatQueue: combatQueueReducer,
  gameHistory: gameHistoryReducer,
  combatPhase: combatPhaseReducer,
  typingAttack: typingAttackReducer,
});

export default rootReducer;
