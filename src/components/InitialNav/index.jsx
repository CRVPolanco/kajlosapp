import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './InitialNav.css';

const InitialNav = () => {
  return(
    <nav className='InitialNav Header__nav'>
      <section className="InitialNav__logo-container">
        <img src="" alt="kajlosapp" className="logo-container--logo" />
      </section>
      <section className="InitialNav__options-container">
        <figure className='options-container__icon-container'>
          <SearchIcon />
        </figure>
        <figure className='options-container__icon-container'>
          <MoreVertIcon />
        </figure>
      </section>
    </nav>
  )
};

export default InitialNav;
