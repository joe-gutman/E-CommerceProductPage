import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ query, setQuery }) => {
  function handleChange(event) {
    event.preventDefault();
    var input = event.target.value;
    setQuery(event.target.value)
  }

  return (
    <div className='search-bar '>
        <i className='search-bar-icon'><FaSearch /></i>
        <input
          className='bold-font search-bar-input'
          type='text'
          placeholder='HAVE A QUESTION? SEARCH FOR ANSWER...'
          value={query}
          onChange={handleChange}
        />
    </div>
  )
};

export default SearchBar;