import githubSearchFilter, { SearchFilterState } from './githubSearchFilter.reducer'
import githubSearchResult, { SearchResultsState } from './githubSearchResult.reducer'
import { combineReducers } from 'redux'

export interface IRootReducer {
    githubSearchFilter: SearchFilterState,
    githubSearchResult: SearchResultsState
}

const rootReducer = combineReducers<IRootReducer>({
    githubSearchFilter,
    githubSearchResult
})

export type RootState = ReturnType<typeof rootReducer>


export default rootReducer
