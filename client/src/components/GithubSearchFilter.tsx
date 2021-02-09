import React from 'react';
import { useInput } from '../hooks/useInput';

function GithubSearchFilter() {

  const { value:searchText, bind:bindSearchText, reset:resetSearchText } = useInput('');
  const { value:filterType, bind:bindfilterType, reset:resetfilterType } = useInput('');


  return (
    <div className="filter-wrapper">
        <div className="search-text-input">
            <input 
                type="search" 
                name="search"
                id="search"
                placeholder="Start typing to search .." 
                {...bindSearchText}
            />
        </div>
        <div className="search-type-input select-input-wrapper">
            <select name="type" id="type" {...bindfilterType}>
                <option value="users">Users</option>
                <option value="repositories">Repositories</option>
            </select>
        </div>
    </div>
  );
}

export default GithubSearchFilter;
