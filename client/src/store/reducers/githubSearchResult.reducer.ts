import { IResult, SearchResultsActionTypes, SET_LOADING, LOADED_RESULTS } from "../actions/githubSearchResult.actions";

export interface SearchResultsState {
    loading: boolean,
    searchResults: { [key: string]: IResult }
}

const initialState: SearchResultsState = {
    loading: false,
    searchResults: {}
}

const githubSearchResults = (state = initialState, action: SearchResultsActionTypes): SearchResultsState => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case LOADED_RESULTS:
            return {
                ...state,
                searchResults: {
                    ...state.searchResults,
                    [action.payload.key]: action.payload.data
                }
            }
        default:
            return state
    }
}

export default githubSearchResults
