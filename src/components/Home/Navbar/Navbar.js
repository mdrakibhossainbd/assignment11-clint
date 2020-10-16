import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../logo.png';
import './Navbar.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../LogIn/firebaseConfig';

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleLogOut = () => {
    firebase.auth().signOut()
      .then(() => {
        sessionStorage.removeItem('token');
        setLoggedInUser('');
      })
      .catch((error) => {
        // An error happened.
      });
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link className="navbar-brand" to="/"><img className="nav-icon" src={logo} alt="" /></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <NavLink activeClassName="active" className="nav-link mr-3" to="/">Home <span className="sr-only">(current)</span></NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link mr-3" to="/dashboard">Dashboard</NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link mr-3" href="/#portfolio">Our Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mr-3" href="/#contact">Contact Us</a>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link mr-3" to="/admin-panel">Admin</NavLink>
          </li>
          <li className="nav-item">
            {
              (loggedInUser.email || sessionStorage.getItem('token')) ?
                <Link onClick={handleLogOut} className="nav-link btn btn-dark text-white px-4 mr-5" to="/">Log Out</Link>
                :
                <Link className="nav-link btn btn-dark text-white px-4 mr-5" to="/login">Log In</Link>
            }
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;