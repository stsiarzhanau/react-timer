import React from 'react';
import Nav from 'Nav';

const propTypes = {
  children: React.PropTypes.node,
};

function Main(props) {
  return (
    <div>
      <Nav />
      <div className="row">
        <div className="column small-centered medium-6 large-4">
          {props.children}
        </div>
      </div>
    </div>
  );
}

Main.propTypes = propTypes;

export default Main;
