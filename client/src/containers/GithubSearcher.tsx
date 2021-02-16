import React, { useMemo } from 'react';
import AppHeader from '../components/AppHeader';
import GithubSearchFilter from '../containers/GithubSearchFilter';
import { useSelector } from 'react-redux';
import { searchTextFilterSelector } from '../store/selectors/githubSearchFilter.selectors';
import GithubSearchResults from './GithubSearchResults';
import { MIN_SEARCH_TEXT } from '../config/constants';

function GithubSearcher() {
  
  const searchTextFilter = useSelector(searchTextFilterSelector)
  const canShowContent = useMemo(() => searchTextFilter?.length >= MIN_SEARCH_TEXT, [searchTextFilter])

  return (
    <div className={`app-wrapper ${ canShowContent ? 'show-content' : '' }`}>
        <AppHeader />
        <GithubSearchFilter />
        <GithubSearchResults />
    </div>
  );
}

export default GithubSearcher;
