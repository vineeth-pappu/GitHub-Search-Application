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

export default {
    setSearchText,
    setSearchType
}
