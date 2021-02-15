import { Action } from "redux"

export const SEARCH_TEXT = 'SEARCH_TEXT'
export const SEARCH_TYPE = 'SEARCH_TYPE'

interface SetSearchTextAction extends Action {
  type: typeof SEARCH_TEXT
  payload: string
}

interface SetSearchTypeAction extends Action {
  type: typeof SEARCH_TYPE
  payload: string
}

export type SearchFilterActionTypes = SetSearchTextAction | SetSearchTypeAction





export const setSearchText = (value: string): SearchFilterActionTypes => {
    return {
        type: SEARCH_TEXT,
        payload: value
    }
}

export const setSearchType = (value: string): SearchFilterActionTypes => {
    return {
        type: SEARCH_TYPE,
        payload: value
    }
}

const githubSearchFilterActions = {
    setSearchText,
    setSearchType
}

export default githubSearchFilterActions;