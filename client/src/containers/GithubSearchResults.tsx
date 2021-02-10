import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchTextFilterSelector, searchTypeFilterSelector } from '../store/selectors/githubSearchFilter.selectors';
import SearchResultsLoader from '../components/SearchResultsLoader';
import { loadingSelector } from '../store/selectors/githubSearchResult.selectors';
import { Loading } from '../store/actions';
import RepositoryList from '../components/RepositoryList';

function GithubSearchResults() {
  
  const dispatch = useDispatch()
  const searchTextFilter = useSelector(searchTextFilterSelector)
  const searchTypeFilter = useSelector(searchTypeFilterSelector)
  const loading = useSelector(loadingSelector)

  const [repoResult, setRepoResult] = useState({} as any)

  useEffect(() => {
    if (searchTextFilter && searchTextFilter.length >= 3) {
        dispatch(Loading(true))
        fetchRepos()
    } else {
        dispatch(Loading(false))
    }
  }, [searchTextFilter])

  const fetchRepos = async () => {
    const query = "q=tetris+language:assembly&sort=stars&order=desc"
    const response = await fetch("https://api.github.com/search/repositories?"+query, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Accept': 'application/vnd.github.v3+json'
        },
    });
    const result = await response.json()
    setRepoResult(result);
    console.log('fetchRepos', result);
    dispatch(Loading(false))
    
    // return response.json(); // parses JSON response into native JavaScript objects
  }

  if (loading) return <SearchResultsLoader />
  
  if (searchTypeFilter == 'repositories') return <RepositoryList data={repoResult} />
  
  return (
    <h1>No data</h1>
  );
}

export default GithubSearchResults;
