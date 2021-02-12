import httpClient from '../../common/utils/httpClient'

class GithubSearchService {
    constructor() {

    }

    users(query: string) {
        return httpClient.get("https://api.github.com/search/users?" + query, {
            method: 'GET',
            headers: {
                'Accept': 'application/vnd.github.v3+json'
            },
        })
    }

    repositories(query: string) {
        return httpClient.get("https://api.github.com/search/repositories?" + query, {
            method: 'GET',
            headers: {
                'Accept': 'application/vnd.github.v3+json'
            },
        })
    }
}

export default new GithubSearchService();