const initialState = {
    loading: false,
    searchResults: {}
}

const githubSearchResults = (state = initialState, action: { type: string, payload: any }) => {
    // const githubSearchResults = (state = initialState, action) => {
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
