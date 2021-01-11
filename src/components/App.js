import React from 'react';
import '../App.css';
import BreakInterval from './BreakInterval';
import SessionLength from './SessionLength';
import Timer from './Timer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerMinute: 25,
      isStart: false
    };
    this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
    this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);
    this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this);
    this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this);
    this.onToggleInterval = this.onToggleInterval.bind(this);
    this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this);
    this.onStart = this.onStart.bind(this);
    this.onRefresh = this.onRefresh.bind(this);
  }
  onIncreaseBreakLength() {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength + 1
      }
    })
  }
  onDecreaseBreakLength() {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength - 1
      }
    })
  }

  onIncreaseSessionLength() {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength + 1,
        timerMinute: prevState.sessionLength + 1
      }
    })
  }
  onDecreaseSessionLength() {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength - 1,
        timerMinute: prevState.sessionLength - 1
      }
    })
  }

  onUpdateTimerMinute() {
    this.setState((prevState) => {
      return {
        timerMinute: prevState.timerMinute - 1
      }
    })
  }
  onToggleInterval(isSession) {
    if (isSession){
      this.setState({
        timerMinute: this.state.sessionLength
      })
    }
    else {
      this.setState({
        timerMinute: this.state.breakLength
      })
    }
  }
  onRefresh(){
    this.setState({
      timerMinute:this.state.sessionLength
    })
  }
  onStart(isStart){
    this.setState({
      isStart: isStart
    })
  }

  render() {
    return (
      <main>
        <h2>Pomodoro Clock</h2>
        <section className="interval-length-container">
          <BreakInterval
            isStart={this.state.isStart}
            BreakInterval={this.state.breakLength}
            increaseBreak={this.onIncreaseBreakLength}
            decreaseBreak={this.onDecreaseBreakLength}
          />
          <SessionLength
            isStart={this.state.isStart}
            SessionLength={this.state.sessionLength}
            increaseSession={this.onIncreaseSessionLength}
            decreaseSession={this.onDecreaseSessionLength}
          />
        </section>
        <Timer
          timerMinute={this.state.timerMinute}
          breakTimer={this.state.breakLength}
          updateTimerMinute={this.onUpdateTimerMinute}
          toggleInterval={this.onToggleInterval}
          refresh={this.onRefresh}
          start={this.onStart}
        />
      </main>
    );
  }
}
export default App;
