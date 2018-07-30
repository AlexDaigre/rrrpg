import React from 'react';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react';
import './App.css';
import BattleScreen from './BattleScreen';
import StartScreen from './StartScreen';
import VictoryScreen from './VictoryScreen';
import ShopScreen from './ShopScreen';

const App = props => {
  const choosePage = screen => {
    switch (screen) {
      case 'battleScreen':
        return <BattleScreen />;
      case 'StartScreen':
        return <StartScreen />;
      case 'victoryScreen':
        return <VictoryScreen />;
      case 'shopScreen':
        return <ShopScreen />;
      default:
        return <StartScreen />;
    }
  };
  return (
    <Segment
      style={{
        position: 'absolute',
        width: '600px',
        height: '400px',
        zIndex: '15',
        top: '50%',
        left: '50%',
        margin: '-200px 0 0 -300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {choosePage(props.currentScreen)}
    </Segment>
  );
};

const mapStateToProps = state => ({
  currentScreen: state.currentScreen,
});

export default connect(mapStateToProps)(App);
