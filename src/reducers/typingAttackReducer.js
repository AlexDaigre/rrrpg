export const typingAttackReducer = (
  state = {
    wordList: [
      'monitor',
      'program',
      'application',
      'keyboard',
      'javascript',
      'gaming',
      'network',
    ],
    timePerWord: 3000,
    score: 0,
    missedWords: 0,
    active: false,
  },
  action,
) => {
  switch (action.type) {
    case 'missedWord':
      return {
        ...state,
        missedWords: state.missedWords + 1,
      };
    case 'hitWord':
      return {
        ...state,
        score: state.score + 1,
      };
    case 'newTypingAttack':
      return {
        ...state,
        score: 0,
        missedWords: 0,
        active: true,
      };
    case 'endTypingAttack':
      return {
        ...state,
        active: false,
      };
    default:
      return state;
  }
};
