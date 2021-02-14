import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchTextFilterSelector, searchTypeFilterSelector } from '../store/selectors/githubSearchFilter.selectors';
import SearchResultsLoader from '../components/SearchResultsLoader';
import { loadingSelector } from '../store/selectors/githubSearchResult.selectors';
import { Loading } from '../store/actions';
import RepositoryList from '../components/RepositoryList';
import UserList from '../components/UserList';
import { searchGithub } from '../services/githubService';

function GithubSearchResults() {

  const dispatch = useDispatch()
  const searchTextFilter = useSelector(searchTextFilterSelector)
  const searchTypeFilter = useSelector(searchTypeFilterSelector)
  const loading = useSelector(loadingSelector)

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

    try {
      const { data } = await searchGithub(req);
      console.log('search results', data);
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
