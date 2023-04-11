import React, { useContext } from 'react';
import { ChatContext } from '../../context/ChatContext';
import SearchIcon from '@mui/icons-material/Search';
import './InitialNav.css';

const InitialNav = () => {

  const { handleSearchOpen } = useContext(ChatContext);

  return(
    <nav className='InitialNav Header__nav'>
      <section className="InitialNav__logo-container">
        <h2>KajlosApp</h2>
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
