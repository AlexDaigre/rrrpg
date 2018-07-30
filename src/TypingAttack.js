import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react';

class TypingAttack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWord: '',
      userInput: '',
      feedbackDisplay: '',
    };
    this.wordtimer = {};
    this.getWordTimer = {};
  }

  componentDidMount() {
    this.startGameHandler();
  }

  componentWillUnmount() {
    clearTimeout(this.getWordTimer);
    clearInterval(this.wordTimer);
  }

  getWord = () => {
    this.getWordTimer = setTimeout(() => {
      const { wordList } = this.props;
      this.setState({
        currentWord: wordList[Math.floor(Math.random() * wordList.length)],
        feedbackDisplay: '',
        userInput: '',
      });
      this.wordTimer = setInterval(this.missedWord, this.props.timePerWord);
    }, 1000);
  };

  missedWord = () => {
    this.setState({
      feedbackDisplay: 'miss',
    });
    this.props.dispatch({ type: 'missedWord' });
    clearInterval(this.wordTimer);
    this.getWord();
  };

  userInputHandler = event => {
    this.setState({ userInput: event.target.value });
    if (event.target.value === this.state.currentWord) {
      this.setState({
        feedbackDisplay: 'sucess',
      });
      this.props.dispatch({ type: 'hitWord' });
      clearInterval(this.wordTimer);
      this.getWord();
    } else if (event.target.value === 'START') {
      this.setState({ userInput: '' });
      this.startGameHandler();
    }
  };

  startGameHandler = () => {
    this.setState({ feedbackDisplay: 'start' });
    this.getWord();
  };

  render() {
    let inputDisplay = {};
    if (this.state.feedbackDisplay === 'sucess') {
      inputDisplay = <marquee direction="up">Sucess!</marquee>; //eslint-disable-line
    } else if (this.state.feedbackDisplay === 'miss') {
      inputDisplay = <marquee direction="up">Miss!</marquee>;  //eslint-disable-line
    } else if (this.state.feedbackDisplay === 'start') {
      inputDisplay = <marquee direction="up">Start!</marquee>; //eslint-disable-line
    } else {
      inputDisplay = (
        <input
          autoFocus //eslint-disable-line
          onChange={this.userInputHandler}
          value={this.state.userInput}
          type="text"
        />
      );
    }

    return (
      <Segment raised>
        <span>{this.state.currentWord}</span>
        <br />
        {inputDisplay}
        <br />
        <span>
          Score: {this.props.score} Misses: {this.props.missedWords}
        </span>
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  wordList: state.typingAttack.wordList,
  timePerWord: state.typingAttack.timePerWord,
  score: state.typingAttack.score,
  missedWords: state.typingAttack.missedWords,
});

export default connect(mapStateToProps)(TypingAttack);
