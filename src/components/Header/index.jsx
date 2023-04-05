import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Header.css';

const Header = () => {
  return(
    <header className="Header" id="Header">
      <nav className='Header__nav'>
        <section className="nav__logo-container">
          <img src="" alt="kajlosapp" className="logo-container--logo" />
        </section>
        <section className="nav__options-container">
          <figure className='options-container__icon-container'>
            <img src="" alt="Search" className="options-container--search" />
          </figure>
          <figure className='options-container__icon-container'>
            <img src="" alt="Options" className="options-container--options" />
          </figure>
        </section>
      </nav>
    </header>
  )
};

export default Header;
