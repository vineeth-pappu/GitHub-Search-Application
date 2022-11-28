import httpClient from '../../common/utils/httpClient'

class CacheAssemblerService {

    constructor() {
    }

    get(query: any) {
        const CMS_DOMAIN = process.env.CMS_DOMAIN;
        return httpClient.get(`${CMS_DOMAIN}${query}`, {
            method: 'GET',
        })
    }
}

export default new CacheAssemblerService();