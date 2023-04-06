import React from 'react';
import './Header.css';

const Header = ({ children }) => {

  return(
    <header className="Header" id="Header">
      {children}
    </header>
  )
};

export default Header;
