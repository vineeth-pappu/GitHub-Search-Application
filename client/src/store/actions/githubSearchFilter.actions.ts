export const setSearchText = (value: any) => {
    return {
        type: "SearchText",
        payload: value
    }
}

export const setSearchType = (value: any) => {
    return {
        type: "SearchType",
        payload: value
    }
}

const githubSearchFilterActions = {
    setSearchText,
    setSearchType
}

export default githubSearchFilterActions;