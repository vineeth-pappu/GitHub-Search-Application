import axios from 'axios'

interface ISearchQuery {
    q: string,
    sort?: string,
    order?: string
}

export const getUsers = (payload: ISearchQuery) => {
    return axios.get("http://localhost:3000/GithubSearcher/users", {
        params: payload
    })
}

export const getRepositories = (payload: ISearchQuery) => {
    return axios.get("http://localhost:3000/GithubSearcher/repositories", {
        params: payload
    })
}