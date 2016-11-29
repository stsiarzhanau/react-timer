import React, { Component } from 'react';
import Clock from 'Clock';

export default class Countdown extends Component {
  render() {
    return (
      <div>
        <div>Render Countdown.jsx</div>
        <Clock totalSeconds={129} />
      </div>
    );
  }
}
