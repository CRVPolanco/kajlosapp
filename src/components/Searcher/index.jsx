import React, { useContext } from 'react';
import { ChatContext } from '../../context/ChatContext';
import Search from '@mui/icons-material/Search';
import './Searcher.css';

const Searcher = () => {

  const { searchValue, handleSearchValue } = useContext(ChatContext);

  return(
    <section className="Searcher">
      <div className="Searcher__container">
        <div className="Searcher__input">
          <input
            type="text"
            className="Searcher__input-input"
            value={searchValue}
            onChange={handleSearchValue}
            placeholder="Search chat"
          />
        </div>
        <figure className="Searcher__icon">
          <Search />
        </figure>
      </div>
    </section>
  )
};

export default Searcher;
