import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div className='Search'>
      <div className='searchInputs'>
        <input
          type='text'
          placeholder='HAVE A QUESTION? SEARCH FOR ANSWER...'
        />
        <div className='searchIcon'>
          <FaSearch />
        </div>
      </div>
      <div className='dataResult'></div>
    </div>
  )
};

export default SearchBar;