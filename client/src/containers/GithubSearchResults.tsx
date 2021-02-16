import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchTextFilterSelector, searchTypeFilterSelector } from '../store/selectors/githubSearchFilter.selectors';
import SearchResultsLoader from '../components/SearchResultsLoader';
import { loadingSelector, searchResultsSelector } from '../store/selectors/githubSearchResult.selectors';
import { Loading, LoadedResults } from '../store/actions';
import RepositoryList from '../components/RepositoryList';
import UserList from '../components/UserList';
import { searchGithub } from '../services/githubService';
import { MIN_SEARCH_TEXT, GITHUB_SEARCH_TYPES } from '../config/constants';
import ErrorMessage from '../components/ErrorMessage';
import NoData from '../components/NoData';

function GithubSearchResults() {

  const dispatch = useDispatch()
  const searchTextFilter = useSelector(searchTextFilterSelector)
  const searchTypeFilter = useSelector(searchTypeFilterSelector)
  const loading = useSelector(loadingSelector)
  const searchResults = useSelector(searchResultsSelector)

  const [data, setData] = useState({} as any)
  const [error, setError] = useState(null as null | Error)


  useEffect(() => {
    if (searchTextFilter?.length >= MIN_SEARCH_TEXT) {
      dispatch(Loading(true))
      setError(null)

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
          setError(error)
        }

        dispatch(Loading(false))
      }

      handleFilterChange()

    } else {
      dispatch(Loading(false))
    }
  }, [searchTextFilter, searchTypeFilter, dispatch, searchResults])



  if (searchTextFilter?.length < MIN_SEARCH_TEXT) return null

  if (loading) return <SearchResultsLoader />

  if (error) return <ErrorMessage error={error.message} />

  if (searchTypeFilter === GITHUB_SEARCH_TYPES.repositories) return <RepositoryList data={data} />

  if (searchTypeFilter === GITHUB_SEARCH_TYPES.users) return <UserList data={data} />

  return <NoData />;
}

export default GithubSearchResults;
