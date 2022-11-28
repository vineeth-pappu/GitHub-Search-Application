import httpClient from '../../common/utils/httpClient'

class GithubSearchService {

    constructor() {
    }

    users(query: any) {
        return httpClient.get("https://api.github.com/search/users", {
            method: 'GET',
            headers: {
                'Accept': 'application/vnd.github.v3+json',
                'Authorization': `token ${process.env.GITHUB_ACCESS_TOKEN}`
            },
            params: {
                ...query
            }
        })
    }

    userDetails(userApiUrl: string) {
        return httpClient.get(userApiUrl, {
            headers: {
                'Authorization': `token ${process.env.GITHUB_ACCESS_TOKEN}`
            },
        })
    }

    repositories(query: any) {
        return httpClient.get("https://api.github.com/search/repositories", {
            method: 'GET',
            headers: {
                'Accept': 'application/vnd.github.v3+json',
                'Authorization': `token ${process.env.GITHUB_ACCESS_TOKEN}`
            },
            params: {
                ...query
            }
        })
    }
}

export default new GithubSearchService();