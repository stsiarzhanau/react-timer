import React, { Component } from 'react';

const propTypes = {
  totalSeconds: React.PropTypes.number,
};

const defaultProps = {
  totalSeconds: 0,
};

class Clock extends Component {
  formatSeconds(totalSeconds) {
    let seconds = totalSeconds % 60;
    let minutes = Math.floor(totalSeconds / 60);

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    return `${minutes}:${seconds}`;
  }

  render() {
    const { totalSeconds } = this.props;
    return (
      <div className="clock">
        <span className="clock-text">{this.formatSeconds(totalSeconds)}</span>
      </div>
    );
  }
}

Clock.propTypes = propTypes;
Clock.defaultProps = defaultProps;

export default Clock;
