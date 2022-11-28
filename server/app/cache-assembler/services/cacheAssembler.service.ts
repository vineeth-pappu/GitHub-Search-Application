import httpClient from '../../common/utils/httpClient'

const CMS_DOMAIN = "http://localhost:3000";
class CacheAssemblerService {

    constructor() {
    }

    get(query: any) {
        return httpClient.get(`${CMS_DOMAIN}${query}`, {
            method: 'GET',
        })
    }
}

export default new CacheAssemblerService();