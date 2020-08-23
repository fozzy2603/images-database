import React from 'react';
import { SearchIcon } from '@primer/octicons-react';

const SearchForm = () => (
  <form className="input-group input-group-sm">
    <div className="input-group-prepend">
      <span className="input-group-text">
        <SearchIcon />
      </span>
    </div>
    <input type="text" className="form-control" placeholder="Search" />
  </form>
);

export default SearchForm;
