import axios from 'axios'

export const getUsers = () => {

}


interface ISearchQuery {
    q: string,
    sort: string,
    order: string
}

export const getRepositories = (payload: ISearchQuery) => {
    return axios.get("http://localhost:3000/GithubSearcher/repositories", {
        params: payload
    })
}