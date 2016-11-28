import React from 'react';
import Nav from 'Nav';

export default function Main(props) {
  return (
    <div>
      <div>
        <div>
          <Nav />
          {props.children}
        </div>
      </div>
    </div>
  );
}

Main.propTypes = {
  children: React.PropTypes.node,
};
