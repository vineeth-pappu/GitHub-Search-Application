/* ******************************************** */
/* ************* Action Types ***************** */
/* ******************************************** */

import { Action } from "redux"

export const SET_LOADING = 'SET_LOADING'
export const LOADED_RESULTS = 'LOADED_RESULTS'

export interface IResult { key: string, data: any }

interface SetLoadingAction extends Action {
  type: typeof SET_LOADING
  payload: boolean
}

interface SetLoadedResultsAction extends Action {
  type: typeof LOADED_RESULTS
  payload: IResult
}

export type SearchResultsActionTypes = SetLoadingAction | SetLoadedResultsAction



/* ******************************************** */
/* ************* Action Creators ***************** */
/* ******************************************** */

export const Loading = (value: boolean): SearchResultsActionTypes => {
    return {
        type: SET_LOADING,
        payload: value
    }
}

export const LoadedResults = (payload: IResult): SearchResultsActionTypes => {
    return {
        type: LOADED_RESULTS,
        payload
    }
}
