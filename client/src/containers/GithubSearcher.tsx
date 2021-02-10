import React, { useMemo } from 'react';
import AppHeader from '../components/AppHeader';
import GithubSearchFilter from '../containers/GithubSearchFilter';
import { useSelector } from 'react-redux';
import { searchTextFilterSelector } from '../store/selectors/githubSearchFilter.selectors';
import GithubSearchResults from './GithubSearchResults';

const MIN_SEARCH_TEXT = 3;

function GithubSearcher() {
  
  const searchTextFilter = useSelector(searchTextFilterSelector)
  const canShowContent = useMemo(() => searchTextFilter && searchTextFilter.length >= MIN_SEARCH_TEXT, [searchTextFilter])

  return (
    <div className={`app-wrapper ${ canShowContent ? 'show-content' : '' }`}>
        <AppHeader />
        <GithubSearchFilter />
        <GithubSearchResults />
    </div>
  );
}

export default GithubSearcher;
