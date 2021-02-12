import httpClient from '../../common/utils/httpClient'

const OAUTH_TOKEN = "1e4418729a2c5350e625c69aad024df904b8da56"
class GithubSearchService {
    constructor() {

    }

    users(query: any) {
        return httpClient.get("https://api.github.com/search/users", {
            method: 'GET',
            headers: {
                'Accept': 'application/vnd.github.v3+json',
                'Authorization': `token ${OAUTH_TOKEN}`
            },
            params: {
                ...query
            }
        })
    }

    userDetails(userApiUrl: string) {
        return httpClient.get(userApiUrl, {
            headers: {
                'Authorization': `token ${OAUTH_TOKEN}`
            },
        })
    }

    repositories(query: any) {
        return httpClient.get("https://api.github.com/search/repositories", {
            method: 'GET',
            headers: {
                'Accept': 'application/vnd.github.v3+json',
                'Authorization': `token ${OAUTH_TOKEN}`
            },
            params: {
                ...query
            }
        })
    }
}

export default new GithubSearchService();