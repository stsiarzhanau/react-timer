import React, { Component } from 'react';

const propTypes = {
  countdownStatus: React.PropTypes.string.isRequired,
  onStatusChange: React.PropTypes.func.isRequired,
};

class Controls extends Component {
  constructor(props) {
    super(props);
    this.onStatusChange = this.onStatusChange.bind(this);
  }

  onStatusChange(newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    };
  }
  render() {
    const { countdownStatus } = this.props;
    const renderStarStopButton = () => {
      if (countdownStatus === 'started') {
        return (
          <button
            className="secondary button"
            onClick={this.onStatusChange('paused')}
          >
          Pause
          </button>
        );
      } else if (countdownStatus === 'paused') {
        return (
          <button
            className="primary button"
            onClick={this.onStatusChange('started')}
          >
          Start
          </button>
        );
      }
      return undefined;
    };

    return (
      <div className="controls">
        {renderStarStopButton()}
        <button
          className="alert hollow button"
          onClick={this.onStatusChange('stopped')}
        >
        Clear
        </button>
      </div>
    );
  }
}

Controls.propTypes = propTypes;


export default Controls;
