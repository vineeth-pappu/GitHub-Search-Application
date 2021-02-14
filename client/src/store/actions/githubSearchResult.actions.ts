export const Loading = (value: Boolean) => {
    return {
        type: "SetLoading",
        payload: value
    }
}

export const LoadedResults = (payload: { key: string, data: any }) => {
    return {
        type: "LoadedResults",
        payload
    }
}
