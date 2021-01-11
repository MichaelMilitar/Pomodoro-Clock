import React from 'react'

class Timer extends React.Component {
    constructor(){
        super();
        this.state = {
            isSession: true,
            timerSecond: 0,
            intervalId: 0
        };

        this.start = this.start.bind(this);
        this.decreaseTimer = this.decreaseTimer.bind(this);
        this.pause = this.pause.bind(this);
        this.refresh = this.refresh.bind(this);
    }

    start() {
        let intervalId = setInterval(this.decreaseTimer, 1000);
        this.props.start(true);
        this.setState({
            intervalId: intervalId
        })
    }
    decreaseTimer() {
        switch (this.state.timerSecond){
            case 0:
                if (this.props.timerMinute === 0){
                    if (this.state.isSession){
                        this.setState({
                            isSession: false
                        });
                        this.props.toggleInterval(this.state.isSession);
                    } else {
                        this.setState({
                            isSession: true
                        });
                        this.props.toggleInterval(this.state.isSession);
                    }
                } else {
                    this.props.updateTimerMinute()
                    this.setState({
                        timerSecond: 59
                    })
                }
                break;
            default:
                this.setState((prevState) => {
                    return {
                        timerSecond: prevState.timerSecond - 1
                    }
                })
                break;
        }
    }
    pause(){
        clearInterval(this.state.intervalId);
        this.props.start(false);
    }
    refresh(){
        this.pause();
        this.props.refresh();
        this.props.start(false);
        this.setState({
            timerSecond: 0,
            isSession: true
        });
    }

    render(){
        return (
            <section>
              <section className = "timer-container">
                <h4>{this.state.isSession === true ? "Session" : 
                "Break"}</h4>
                <span className = "timer">{this.props.timerMinute}</span>
                <span className = "timer">:</span>
                <span className = "timer">
                    {this.state.timerSecond === 0 
                        ? "00" : this.state.timerMinute < 10 
                        ? "0" + this.state.timerSecond
                        : this.state.timerSecond}
                </span>
              </section>
                        <section className = "timer-actions">
                            <button onClick={this.start}>Start</button>
                            <button onClick={this.pause}>Pause</button>
                            <button onClick={this.refresh}>Refresh</button>
                        </section>
            </section>
        )
    }
}

export default Timer;