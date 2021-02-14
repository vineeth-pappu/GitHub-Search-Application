import { Request, Response, Router } from 'express';
import BaseController from '../../../common/baseController';
import HttpResponse from '../../../common/facades/httpResponse';
import httpClient from '../../../common/utils/httpClient'
import githubSearchService from '../../services/githubSearch.service';
import { CACHE_SETEX_ASYNC, CACHE_GET_ASYNC } from '../../../common/utils/redisClient';
class GithubSearchController extends BaseController {

    async searchUsers(req: Request, res: Response) {
        try {

            // check in cache
            const dataInCache = await CACHE_GET_ASYNC(JSON.stringify(req.query))
            if (dataInCache) {
                // send cached data
                res.status(HttpResponse.HTTP_OK).send(JSON.parse(dataInCache));
                return
            }

            const { data } = await githubSearchService.users(req.query)

            const usersWithDetails: Array<Promise<any>> = data.items.map((u: { url: string; }) => {
                return GithubSearchController.getUserDetailsFromUrl(u.url)
            })

            // overide list data with user details 
            data.items = await Promise.all(usersWithDetails)

            // set user list in cache
            const saveInCache = await CACHE_SETEX_ASYNC(JSON.stringify(req.query), 60, JSON.stringify(data))

            res.status(HttpResponse.HTTP_OK).send(data);

        } catch (error) {
            console.log('error---------', error);
            // throw new Error("users failed")
            res.status(HttpResponse.HTTP_UNPROCESSABLE_ENTITY).send(error);
        }
    }

    async searchRepositories(req: Request, res: Response) {
        try {
            // const query = `q=tetris+language:assembly&sort=stars&order=desc`
            // const query = `q=${req.query.q}`
            const { data } = await githubSearchService.repositories(req.query)
            res.status(HttpResponse.HTTP_OK).send(data);
        } catch (error) {
            res.status(HttpResponse.HTTP_UNPROCESSABLE_ENTITY).send(error);
        }
    }

    static async getUserDetailsFromUrl(url: string) {
        return new Promise(async (resolve, reject) => {
            // check if user details exists in cache
            const dataInCache = await CACHE_GET_ASYNC(url)
            if (dataInCache) {
                // send cached data
                resolve(JSON.parse(dataInCache));
                return
            }

            githubSearchService.userDetails(url).then(async (res) => {
                // set user details in cache
                const saveInCache = await CACHE_SETEX_ASYNC(url, 60, JSON.stringify(res.data))
                // send cached data
                resolve(res.data)
            }).catch(err => {
                console.log('user details promise error', err);
                resolve(null)
            })
        })
    }

}

export default new GithubSearchController();