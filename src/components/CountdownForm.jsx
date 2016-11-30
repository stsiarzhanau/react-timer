import React, { Component } from 'react';

const propTypes = {
  onSetCountdown: React.PropTypes.func,
};

class CountdownForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const strSeconds = this.seconds.value;
    if (strSeconds.match(/^[0-9]*$/)) {
      this.seconds.value = '';
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  }

  render() {
    return (
      <div>
        <form
          ref={(c) => { this.form = c; }}
          onSubmit={this.onSubmit}
          className="countdown-form"
        >
          <input
            type="text"
            ref={(c) => { this.seconds = c; }}
            placeholder="Enter time in seconds"
          />
          <button className="expanded button">Start</button>
        </form>
      </div>
    );
  }
}

CountdownForm.propTypes = propTypes;

export default CountdownForm;
