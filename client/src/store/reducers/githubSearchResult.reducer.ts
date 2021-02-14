const initialState = {
    loading: false,
    searchResults: {}
}

const githubSearchResults = (state = initialState, action: { type: any, payload: any }) => {
    switch (action.type) {
        case "SetLoading":
            return {
                ...state,
                loading: action.payload
            }
        case "LoadedResults":
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
