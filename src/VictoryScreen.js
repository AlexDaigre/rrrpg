import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { popFromCombatQueue } from './actionCreators';

class VictoryScreen extends Component {
  handleButton = () => {
    this.props.dispatch(popFromCombatQueue(this.props.combatQueue));
    this.props.dispatch({ type: 'switchScreen', newScreen: 'shopScreen' });
  };

  render() {
    return (
      <div>
        <div>
          With your victory against the {this.props.enemy.name}, you will live to see another dawn.
        </div>
        <div>
          For your success you have been awarded {this.props.enemy.goldValue}{' '}
          gold.
        </div>
        <div>Tonight you rest and prepare. Tommorow you will fight again.</div>
        <Button onClick={this.handleButton}>Sleep</Button>
    </div>
    )
  }
}

const mapStateToProps = state => ({
  playerCharecter: state.player,
  enemy: state.enemyArray[0],
});

export default connect(mapStateToProps)(VictoryScreen);
