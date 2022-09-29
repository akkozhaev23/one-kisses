import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavLink } from 'react-bootstrap';
import Logout from './Logout';
import auth from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const NavBar = () => {
  const [user] = useAuthState(auth);
  console.log(user);

  return (
    <Navbar collapseOnSelect expand="sm" bg="secondary">
      <Navbar.Toggle aria-controls="myNavbar" />
      <Navbar.Collapse>
        <Nav id="myNavbar">
          <NavLink style={{ color: 'white' }} as={Link} to="/">
            Home
          </NavLink>
          <NavLink style={{ color: 'white' }} as={Link} to="/about">
            About
          </NavLink>
          <NavLink style={{ color: 'white' }} as={Link} to="/company">
            Company
          </NavLink>
        </Nav>
      </Navbar.Collapse>
      {user ? (
        <Logout />
      ) : (
        <button className="btn btn-success mx-2">
          <NavLink style={{ color: 'white' }} as={Link} to="/sign-in">
            Sign in
          </NavLink>
        </button>
      )}
    </Navbar>
  );
};

export default NavBar;
