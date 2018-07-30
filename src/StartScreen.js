import React from 'react';
import { connect } from 'react-redux';
import { Button, Header } from 'semantic-ui-react';
import { newGame } from './actionCreators';

const StartScreen = props => {
  const newGameButtonHandler = () => {
    props.dispatch(newGame());
  };

  return (
    <div>
      <Header as="h3">The React Redux RPG!</Header>
      <Header as="h1">Retro Reckoning 2:</Header>
      <Header as="h2">Redux's Revenge</Header>
      <Button onClick={newGameButtonHandler}>New Game</Button>
      <Button>Load Game</Button>
    </div>
  );
};

export default connect()(StartScreen);
