import React, { Component } from 'react';

const propTypes = {
  countdownStatus: React.PropTypes.string.isRequired,
};

class Controls extends Component {
  render() {
    const { countdownStatus } = this.props;
    const renderStarStopButton = () => {
      if (countdownStatus === 'started') {
        return <button className="secondary button">Pause</button>;
      } else if (countdownStatus === 'paused') {
        return <button className="primary button">Start</button>;
      }
    };

    return (
      <div className="controls">
        {renderStarStopButton()}
        <button className="alert hollow button">Clear</button>
      </div>
    );
  }
}

Controls.propTypes = propTypes;


export default Controls;
