import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL
interface ISearchQuery {
    q: string,
    sort?: string,
    order?: string
}

export const getUsers = (payload: ISearchQuery) => {
    return axios.get(`${API_URL}/GithubSearcher/users`, {
        params: payload
    })
}

export const getRepositories = (payload: ISearchQuery) => {
    return axios.get(`${API_URL}/GithubSearcher/repositories`, {
        params: payload
    })
}