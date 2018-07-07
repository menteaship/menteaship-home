import React from 'react';
import Link from 'gatsby-link';

const Navbar = () => (
  <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
    <a className="navbar-brand" href="#">
      men<i>tea</i>ship
    </a>
    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
      <ul className="navbar-nav mr-auto">
        <Link to="/" className="navbar-item">
          Home <span className="sr-only">(current)</span>
        </Link>
      </ul>
    </div>
  </nav>
);

export default Navbar;
