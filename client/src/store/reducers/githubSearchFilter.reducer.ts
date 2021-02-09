const initialState = {
    searchText: "",
    searchType: "users"
}

const githubSearchFilter = (state = initialState, action: { type: any, payload: any }) => {
    switch(action.type){
        case "SearchText":
            return {
                ...state,
                searchText: action.payload
            }
        case "SearchType":
            return {
                ...state,
                searchType: action.payload
            }
        default: 
            return state
    }
}

export default githubSearchFilter
