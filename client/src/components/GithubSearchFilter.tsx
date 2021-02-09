import React from 'react';
import { useInput } from '../hooks/useInput';
import { useSelector, useDispatch } from 'react-redux';
import { searchTextFilterSelector, searchTypeFilterSelector } from '../store/selectors/githubSearchFilter.selectors';
import { useEffect } from 'react';
import { setSearchText, setSearchType } from '../store/actions/githubSearchFilter.actions';

function GithubSearchFilter() {

  const dispatch = useDispatch()
  const searchTextFilter = useSelector(searchTextFilterSelector)
  const searchTypeFilter = useSelector(searchTypeFilterSelector)

  const { value:searchText, bind:bindSearchText, reset:resetSearchText } = useInput('');
  const { value:filterType, bind:bindfilterType, reset:resetfilterType } = useInput('');
  
  useEffect(() => {
    dispatch(setSearchText(searchText))
  }, [searchText])
  
  useEffect(() => {
    dispatch(setSearchType(filterType))
  }, [filterType])

  return (
    <div className="filter-wrapper">
        <div>
            {searchTextFilter} - {searchTypeFilter}
        </div>
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
