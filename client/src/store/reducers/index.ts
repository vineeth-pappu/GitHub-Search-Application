import githubSearchFilter from './githubSearchFilter.reducer'
import githubSearchResult from './githubSearchResult.reducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    githubSearchFilter,
    githubSearchResult
})

export default rootReducer
