import React, { useMemo, useEffect } from 'react';
import AppHeader from '../components/AppHeader';
import GithubSearchFilter from '../containers/GithubSearchFilter';
import { useSelector, useDispatch } from 'react-redux';
import { searchTextFilterSelector, searchTypeFilterSelector } from '../store/selectors/githubSearchFilter.selectors';
import SearchResultsLoader from '../components/SearchResultsLoader';
import { loadingSelector } from '../store/selectors/githubSearchResult.selectors';
import { Loading } from '../store/actions';

function GithubSearchResults() {
  
  const dispatch = useDispatch()
  const searchTextFilter = useSelector(searchTextFilterSelector)
  const searchTypeFilter = useSelector(searchTypeFilterSelector)
  const loading = useSelector(loadingSelector)

  useEffect(() => {
    if (searchTextFilter && searchTextFilter.length >= 3) {
        dispatch(Loading(true))
    } else {
        dispatch(Loading(false))
    }
  }, [searchTextFilter])    

  if (loading) return <SearchResultsLoader />

  return (
    <div className="github-search-results-wrapper">
        results
    </div>
  );
}

export default GithubSearchResults;
