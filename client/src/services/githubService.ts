import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

interface ISearchQuery {
    q: string,
    sort?: string,
    order?: string
}

export const searchGithub = (payload: ISearchQuery) => {
    return axios.post(`${API_URL}/github/search`, payload)
}