import React from 'react';
import Navbar from '../Navbar/Navbar';
import Main from '../Main/Main';
import './Header.css';

const Header = () => {
  return (
    <header className="bg-color">
      <Navbar />
      <Main />
    </header>
  );
};

export default Header;