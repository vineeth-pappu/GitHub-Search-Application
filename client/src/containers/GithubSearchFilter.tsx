import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchTextFilterSelector, searchTypeFilterSelector } from '../store/selectors/githubSearchFilter.selectors';
import { setSearchText, setSearchType } from '../store/actions/githubSearchFilter.actions';
import SearchTextInput from '../components/SearchTextInput';
import SearchTypeInput from '../components/SearchTypeInput';

function GithubSearchFilter() {

  const dispatch = useDispatch()
  const searchTextFilter = useSelector(searchTextFilterSelector)
  const searchTypeFilter = useSelector(searchTypeFilterSelector)

  const handleSearchTextChange = (value: any) => dispatch(setSearchText(value))
  const handleSearchTypeChange = (value: any) => dispatch(setSearchType(value))

  return (
    <div className="filter-wrapper">
        <SearchTextInput 
            initialValue={searchTextFilter} 
            onChange={handleSearchTextChange} 
        />
        
        <SearchTypeInput 
            initialValue={searchTypeFilter} 
            onChange={handleSearchTypeChange} 
        />
    </div>
  );
}

export default GithubSearchFilter;
