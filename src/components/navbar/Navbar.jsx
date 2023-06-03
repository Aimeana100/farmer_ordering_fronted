import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ links }) => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        {links &&
          links.map((link, index) => (
            <li key={index} className="nav-item">
              <NavLink to={link.to} className="nav-link">
                {' '}
                {link.text}{' '}
              </NavLink>{' '}
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Navbar;
