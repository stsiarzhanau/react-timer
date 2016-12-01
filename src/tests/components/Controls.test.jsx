import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

import Controls from 'Controls';

describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });
});


describe('render', () => {
  it('should render pause when started', () => {
    const controls = TestUtils
      .renderIntoDocument(<Controls countdownStatus="started" />);
    const $elm = $(ReactDOM.findDOMNode(controls));
    const $pauseButton = $elm.find('button:contains(Pause)');

    expect($pauseButton.length).toBe(1);
  });

  it('should render start when paused', () => {
    const controls = TestUtils
      .renderIntoDocument(<Controls countdownStatus="paused" />);
    const $elm = $(ReactDOM.findDOMNode(controls));
    const $pauseButton = $elm.find('button:contains(Start)');

    expect($pauseButton.length).toBe(1);
  });
});
