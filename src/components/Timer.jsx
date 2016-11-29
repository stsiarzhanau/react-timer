import React, { Component } from 'react';
import Clock from 'Clock';

export default class Timer extends Component {
  render() {
    return (
      <div>
        <div>Render Timer.jsx</div>
        <Clock totalSeconds={129}/>
      </div>
    );
  }
}
