import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchTextFilterSelector, searchTypeFilterSelector } from '../store/selectors/githubSearchFilter.selectors';
import SearchResultsLoader from '../components/SearchResultsLoader';
import { loadingSelector, searchResultsSelector } from '../store/selectors/githubSearchResult.selectors';
import { Loading, LoadedResults } from '../store/actions';
import RepositoryList from '../components/RepositoryList';
import UserList from '../components/UserList';
import { searchGithub } from '../services/githubService';

function GithubSearchResults() {

  const dispatch = useDispatch()
  const searchTextFilter = useSelector(searchTextFilterSelector)
  const searchTypeFilter = useSelector(searchTypeFilterSelector)
  const loading = useSelector(loadingSelector)
  const searchResults = useSelector(searchResultsSelector)

  const [data, setData] = useState({} as any)

  useEffect(() => {
    if (searchTextFilter && searchTextFilter.length >= 3) {
      dispatch(Loading(true))

      handleFilterChange()

    } else {
      dispatch(Loading(false))
    }
  }, [searchTextFilter, searchTypeFilter])


  const handleFilterChange = async () => {
    const req = {
      q: searchTextFilter,
      type: searchTypeFilter,
      sort: "stars",
      order: "desc"
    }

    // check if data exists in store
    if (searchResults[JSON.stringify(req)]) {
      setData(searchResults[JSON.stringify(req)]);
      dispatch(Loading(false))
      return
    }

    try {
      const { data } = await searchGithub(req);
      console.log('search results', data);
      dispatch(LoadedResults({ key: JSON.stringify(req), data }))
      setData(data);
    } catch (error) {
      console.log('search results error', error);
    }

    dispatch(Loading(false))
  }


  if (!searchTextFilter || searchTextFilter.length < 3) return null

  if (loading) return <SearchResultsLoader />

  if (searchTypeFilter === 'repositories') return <RepositoryList data={data} />

  if (searchTypeFilter === 'users') return <UserList data={data} />

  return (
    <h1>No data</h1>
  );
}

export default GithubSearchResults;
