import React, { Component } from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';
import Controls from 'Controls';

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      countdownStatus: 'stopped',
    };
    this.handleSetCountdown = this.handleSetCountdown.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;

        case 'stopped':
          this.setState({ count: 0 });
          // falls through

        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;

        // no default
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = undefined;
  }

  startTimer() {
    this.timer = setInterval(() => {
      const newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0,
      });

      if (newCount === 0) {
        this.setState({ countdownStatus: 'stopped' });
      }
    }, 1000);
  }

  handleSetCountdown(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started',
    });
  }

  handleStatusChange(newStatus) {
    this.setState({ countdownStatus: newStatus });
  }

  render() {
    const { count, countdownStatus } = this.state;

    const renderControls = () => {
      if (countdownStatus === 'stopped') {
        return <CountdownForm onSetCountdown={this.handleSetCountdown} />;
      }
      return (
        <Controls
          countdownStatus={countdownStatus}
          onStatusChange={this.handleStatusChange}
        />
      );
    };

    return (
      <div>
        <h1 className="page-title">Countdown App</h1>
        <Clock totalSeconds={count} />
        {renderControls()}
      </div>
    );
  }
}

export default Countdown;
