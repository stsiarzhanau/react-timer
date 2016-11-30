import React from 'react';
import { Link, IndexLink } from 'react-router';

function Nav() {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">React Timer App</li>
          <li>
            <IndexLink
              to="/"
              activeClassName="active-link"
            >
            Timer
            </IndexLink>
          </li>
          <li>
            <Link
              to="/countdown"
              activeClassName="active-link"
            >
            Countdown
            </Link>
          </li>
        </ul>
      </div>{/* top-bar-left */}
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created by <a href="">Aliaksandr Stsiarzhanau</a>
          </li>
        </ul>
      </div>{/* top-bar-right */}
    </div>
  );
}

export default Nav;
