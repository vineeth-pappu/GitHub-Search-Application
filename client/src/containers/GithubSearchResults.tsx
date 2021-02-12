import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchTextFilterSelector, searchTypeFilterSelector } from '../store/selectors/githubSearchFilter.selectors';
import SearchResultsLoader from '../components/SearchResultsLoader';
import { loadingSelector } from '../store/selectors/githubSearchResult.selectors';
import { Loading } from '../store/actions';
import RepositoryList from '../components/RepositoryList';
import UserList from '../components/UserList';
import { getRepositories } from '../services/githubService';

function GithubSearchResults() {

  const dispatch = useDispatch()
  const searchTextFilter = useSelector(searchTextFilterSelector)
  const searchTypeFilter = useSelector(searchTypeFilterSelector)
  const loading = useSelector(loadingSelector)

  const [data, setData] = useState({} as any)

  useEffect(() => {
    if (searchTextFilter && searchTextFilter.length >= 3) {
      dispatch(Loading(true))
      if (searchTypeFilter === 'users') {
        fetchUsers()
      } else {
        fetchRepos()
      }
    } else {
      dispatch(Loading(false))
    }
  }, [searchTextFilter, searchTypeFilter])

  const fetchRepos = async () => {
    const req = {
      q: searchTextFilter,
      sort: "stars",
      order: "desc"
    }

    try {
      const { data } = await getRepositories(req);
      console.log('fetchRepos', data);
      setData(data);
    } catch (error) {
      console.log('fetchRepos error', error);
    }

    dispatch(Loading(false))
  }

  const fetchUsers = async () => {
    const query = "q=tom"
    const response = await fetch("https://api.github.com/search/users?" + query, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Accept': 'application/vnd.github.v3+json'
      },
    });
    const result = await response.json()
    // setData(result);
    // console.log('fetchUsers', result);
    const userDetailsApi = result.items.map((u: { url: RequestInfo; }) => fetch(u.url).then(r => r.json()))

    result.items = await Promise.all(userDetailsApi)
    setData(result);
    console.log('fetchUsers details', result);
    dispatch(Loading(false))

    // return response.json(); // parses JSON response into native JavaScript objects
  }

  if (loading) return <SearchResultsLoader />

  if (searchTypeFilter === 'repositories') return <RepositoryList data={data} />

  if (searchTypeFilter === 'users') return <UserList data={data} />

  return (
    <h1>No data</h1>
  );
}

export default GithubSearchResults;
