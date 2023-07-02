import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ query, setQuery }) => {
  function handleChange(event) {
    var input = event.target.value;
    setQuery(event.target.value)
  }

  return (
    <div className='search'>
      <div className='search-input'>
        <input
          type='text'
          placeholder='HAVE A QUESTION? SEARCH FOR ANSWER...'
          value={query}
          onChange={handleChange}
        />
        <div className='search-icon'>
          <FaSearch />
        </div>
      </div>
      <div className='data-result'></div>
    </div>
  )
};

export default SearchBar;