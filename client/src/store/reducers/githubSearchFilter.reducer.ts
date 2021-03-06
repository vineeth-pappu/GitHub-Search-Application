import { SearchFilterActionTypes, SEARCH_TEXT, SEARCH_TYPE } from "../actions/githubSearchFilter.actions"

export interface SearchFilterState {
    searchText: string,
    searchType: string
}

const initialState: SearchFilterState = {
    searchText: "",
    searchType: "users"
}

const githubSearchFilter = (state = initialState, action: SearchFilterActionTypes): SearchFilterState => {
    switch (action.type) {
        case SEARCH_TEXT:
            return {
                ...state,
                searchText: action.payload
            }
        case SEARCH_TYPE:
            return {
                ...state,
                searchType: action.payload
            }
        default:
            return state
    }
}

export default githubSearchFilter
