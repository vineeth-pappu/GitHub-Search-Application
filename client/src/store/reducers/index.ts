import githubSearchFilter from './githubSearchFilter.reducer'
import githubSearchResult from './githubSearchResult.reducer'
import { combineReducers } from 'redux'

export interface IRootReducer {
    githubSearchFilter: {
        searchText: string,
        searchType: string
    },
    githubSearchResult: {
        loading: boolean,
        searchResults: { [key: string]: any }
    }
}

const rootReducer = combineReducers({
    githubSearchFilter,
    githubSearchResult
})

export default rootReducer
