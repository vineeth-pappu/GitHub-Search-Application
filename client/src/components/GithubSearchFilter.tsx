import React from 'react';

function GithubSearchFilter() {
  return (
    <div>
        <div className="filter-wrapper">
            <div className="search-text-input">
                <input type="search" name="search" id="search" placeholder="Start typing to search .."/>
            </div>
            <div className="search-type-input select-input-wrapper">
                <select name="type" id="type">
                    <option value="users">Users</option>
                    <option value="repositories">Repositories</option>
                </select>
            </div>
        </div>
    </div>
  );
}

export default GithubSearchFilter;
