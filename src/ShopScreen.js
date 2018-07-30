import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Header, List } from 'semantic-ui-react';
import { newFight, healPlayer, deductPlayerGold } from './actionCreators';

class ShopScreen extends Component {
  handleNextFightButton = () => {
    this.props.dispatch(newFight());
  };

  handleHeal = (healAmount, cost) => () => {
    this.props.dispatch(healPlayer(this.props.player, healAmount));
    this.props.dispatch(deductPlayerGold(this.props.player, cost));
  };

  render() {
    return (
      <div
        style={{
          height: '400px',
          width: '600px',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <div>
          <Header as="h2">{this.props.player.name}</Header>
          <div>Health - {this.props.player.health}</div>
          <div>Gold - {this.props.player.gold}</div>
          <Header as="h4">Inventory</Header>
          <List>
            {this.props.player.inventory.map((item, index) => (
              <List.Item key={index}>
                {item.name} - {item.owned}
              </List.Item>
            ))}
          </List>
          <Button onClick={this.handleNextFightButton}>Go to Next Fight</Button>
        </div>
        <div>
          <Header as="h2">Shop</Header>
          <List>
            <List.Item>Sword - 10G</List.Item>
            <List.Item>Armour - 10G</List.Item>
            <List.Item>Potion - 5G</List.Item>
            <List.Item>FireBomb - 5G</List.Item>
          </List>
          <Header as="h2">Doctor</Header>
          <List>
            <List.Item
              onClick={this.handleHeal(this.props.player.maxHealth, 15)}
            >
              Recover all Health - 15G
            </List.Item>
            <List.Item onClick={this.handleHeal(5, 5)}>
              Recover 5 Health - 5G
            </List.Item>
          </List>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  player: state.player,
});

export default connect(mapStateToProps)(ShopScreen);
