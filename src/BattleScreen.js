import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, List, Segment, Container } from 'semantic-ui-react';
import TypingAttack from './TypingAttack';
import {
  popFromCombatQueue,
  playerAttack,
  enemyAttack,
  resolveCombatRound,
  playerTypingAttack,
} from './actionCreators';

class BattleScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayItems: false,
    };
  }

  handleTextAdvance = () => {
    this.props.dispatch(popFromCombatQueue(this.props.combatQueue));
  };

  handleResolutionButton = () => {
    this.props.dispatch(
      resolveCombatRound(this.props.playerCharecter, this.props.enemy),
    );
    this.handleTextAdvance();
  };

  handleEnemyAttackButton = () => {
    this.props.dispatch(
      enemyAttack(this.props.playerCharecter, this.props.enemy),
    );
    this.handleTextAdvance();
  };

  handleAttackButton = () => {
    this.props.dispatch(
      playerAttack(this.props.playerCharecter, this.props.enemy),
    );
  };

  handleStartTypingAttack = () => {
    this.props.dispatch({ type: 'newTypingAttack' });
    setTimeout(this.endTypingAttack, 10000);
  };

  endTypingAttack = () => {
    this.props.dispatch({ type: 'endTypingAttack' });
    console.log(this.props.typingAttackScore);
    this.props.dispatch(
      playerTypingAttack(
        this.props.playerCharecter,
        this.props.enemy,
        this.props.typingAttackScore,
      ),
    );
  };

  handleItemButton = () => {
    this.setState({
      displayItems: !this.state.displayItems,
    });
  };

  render() {
    let controlsDiplay;
    if (this.state.displayItems) {
      controlsDiplay = (
        <div>
          {this.props.playerCharecter.inventory.map((item, index) => (
            <Button key={index} onClick={item.use}>
              {item.name} - {item.owned}
            </Button>
          ))}
          <Button onClick={this.handleItemButton}>Cancel</Button>
        </div>
      );
    } else {
      controlsDiplay = (
        <div>
          <Button onClick={this.handleAttackButton}>Quick Attack</Button>
          <Button onClick={this.handleStartTypingAttack}>Skill Attack</Button>
          <Button onClick={this.handleItemButton}>Items</Button>
        </div>
      );
    }

    let uiDisplay;
    if (this.props.typingAttackActive) {
      uiDisplay = <TypingAttack />
    } else if (this.props.combatPhase === 'playerAttack') {
      uiDisplay = controlsDiplay;
    } else if (this.props.combatPhase === 'enemyAttack') {
      uiDisplay = (
        <Container
          text
          textAlign="center"
          onClick={this.handleEnemyAttackButton}
        >
          {this.props.combatQueue}
        </Container>
      );
    } else {
      uiDisplay = (
        <Container
          text
          textAlign="center"
          onClick={this.handleResolutionButton}
        >
          {this.props.combatQueue}
        </Container>
      );
    }

    return (
      <div
        style={{
          height: '400px',
          width: '600px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Segment
          style={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'baseline',
          }}
        >
          <List>
            <List.Item>{this.props.playerCharecter.name}</List.Item>
            <List.Item>Health:{this.props.playerCharecter.health}</List.Item>
          </List>

          <List>
            <List.Item>{this.props.enemy.name}</List.Item>
            <List.Item>Health:{this.props.enemy.health}</List.Item>
          </List>
        </Segment>
        <Segment
          raised
          style={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'baseline',
          }}
        >
          {uiDisplay}
        </Segment>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  playerCharecter: state.player,
  enemy: state.enemyArray[0],
  combatQueue: state.combatQueue[0],
  combatPhase: state.combatPhase,
  typingAttackActive: state.typingAttack.active,
  typingAttackScore: state.typingAttack.score,
});

export default connect(mapStateToProps)(BattleScreen);
