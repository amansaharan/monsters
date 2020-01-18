import React from 'react';
import './SearchBox.css';

const SearchBox = props => {
  return (
    <div>
      <input
        className="search"
        type="search"
        placeholder={props.placeholder}
        onChange={props.handleSearch}
      />
    </div>
  );
};

export default SearchBox;
