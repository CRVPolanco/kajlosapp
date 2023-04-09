import React, { useContext } from 'react';
import { ChatContext } from '../../context/ChatContext';
import SearchIcon from '@mui/icons-material/Search';
import './InitialNav.css';

const InitialNav = () => {

  const { handleSearchOpen } = useContext(ChatContext);

  return(
    <nav className='InitialNav Header__nav'>
      <section className="InitialNav__logo-container">
        <img src="" alt="kajlosapp" className="logo-container--logo" />
      </section>
      <section className="InitialNav__options-container">
        <figure className='options-container__icon-container' onClick={handleSearchOpen}>
          <SearchIcon />
        </figure>
      </section>
    </nav>
  )
};

export default InitialNav;
