/**
 * Created by Andrew Bell 07/07/18
 * www.recursivechaos.com
 * andrew@recursivechaos.com
 * Licensed under MIT License 2018. See LICENSE.txt for details.
 */
import React from 'react';
import Link from 'gatsby-link';

const Navbar = () => (
  <nav className="navbar navbar-expand navbar-dark fixed-top bg-primary">
  {/*<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">*/}
    <Link to="/" className="navbar-brand">
      men<i>tea</i>ship
    </Link>

    {/* TODO: navbar-toggler is not working. Possible React/Bootstrap JS conflicts */}
    {/*<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-content">*/}
      {/*<span className="navbar-toggler-icon"></span>*/}
    {/*</button>*/}

    {/*<div className="collapse navbar-collapse" id="nav-content">*/}
    <div id="nav-content">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/about" className="nav-link" activeClassName="active">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/code-of-conduct" className="nav-link" activeClassName="active">
            Code of Conduct
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
