const initialState = {
    loading: false
}

const githubSearchResults = (state = initialState, action: { type: any, payload: any }) => {
    switch(action.type){
        case "SetLoading":
            return {
                ...state,
                loading: action.payload
            }
        default: 
            return state
    }
}

export default githubSearchResults
