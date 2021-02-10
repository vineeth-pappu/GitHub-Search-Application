import React, { useMemo, useEffect, useState } from 'react';
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

  return (
    <div className="github-search-results-wrapper">
        {
            repoResult && repoResult.items && repoResult.items.map((d: any, i: any) => {
                return (
                    <div className="repo-card">
                        <div className="repo-card-header">
                            <div className="repo-name">Reponame</div>
                            <div className="repo-desc">
                                This is sample description. This is sample description
                            </div>
                        </div>
                        <div className="repo-card-footer">
                            <div className="footer-item">
                                <div className="footer-item-icon">icon</div>
                                <div className="footer-item-text">200</div>
                            </div>
                            <div className="footer-item">
                                <div className="footer-item-icon">icon</div>
                                <div className="footer-item-text">200</div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
  );
}

export default GithubSearchResults;
