import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

import CountdownForm from 'CountdownForm';

describe('CountdownForm', () => {
  it('should exist', () => {
    expect(CountdownForm).toExist();
  });

  it('should call onSetCountdown if valid seconds entered', () => {
    const spy = expect.createSpy();
    const countdownForm = TestUtils
      .renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
    const $elm = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.seconds.value = '109';
    TestUtils.Simulate.submit($elm.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(109);
  });

  it('should not call onSetCountdown if invalid seconds entered', () => {
    const spy = expect.createSpy();
    const countdownForm = TestUtils
      .renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
    const $elm = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.seconds.value = 'wow';
    TestUtils.Simulate.submit($elm.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
