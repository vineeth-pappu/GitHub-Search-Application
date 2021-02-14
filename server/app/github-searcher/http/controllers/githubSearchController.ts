import { Request, Response, Router } from 'express';
import BaseController from '../../../common/baseController';
import HttpResponse from '../../../common/facades/httpResponse';
import httpClient from '../../../common/utils/httpClient'
import githubSearchService from '../../services/githubSearch.service';
import { CACHE_SETEX_ASYNC, CACHE_GET_ASYNC } from '../../../common/utils/redisClient';
class GithubSearchController extends BaseController {

    search = async (req: Request, res: Response) => {

        if (req.body.type === 'users') {
            this.searchUsers(req, res)
        } else {
            this.searchRepositories(req, res)
        }

    }

    searchUsers = async (req: Request, res: Response) => {
        try {

            // check in cache
            const dataInCache = await CACHE_GET_ASYNC(JSON.stringify(req.body))
            if (dataInCache) {
                // send cached data
                res.status(HttpResponse.HTTP_OK).send(JSON.parse(dataInCache));
                return
            }

            const { data } = await githubSearchService.users(req.body)

            const usersWithDetails: Array<Promise<any>> = data.items.map((u: { url: string; }) => {
                return this.getUserDetailsFromUrl(u.url)
            })

            // overide list data with user details 
            data.items = await Promise.all(usersWithDetails)

            // set user list in cache
            const saveInCache = await CACHE_SETEX_ASYNC(JSON.stringify(req.body), 60, JSON.stringify(data))

            res.status(HttpResponse.HTTP_OK).send(data);

        } catch (error) {
            console.log('error---------', error);
            // throw new Error("users failed")
            res.status(HttpResponse.HTTP_UNPROCESSABLE_ENTITY).send(error);
        }
    }

    searchRepositories = async (req: Request, res: Response) => {
        try {
            // check in cache
            const dataInCache = await CACHE_GET_ASYNC(JSON.stringify(req.body))
            if (dataInCache) {
                // send cached data
                res.status(HttpResponse.HTTP_OK).send(JSON.parse(dataInCache));
                return
            }

            const { data } = await githubSearchService.repositories(req.body)
            // set repo list in cache
            const saveInCache = await CACHE_SETEX_ASYNC(JSON.stringify(req.body), 60, JSON.stringify(data))

            res.status(HttpResponse.HTTP_OK).send(data);

        } catch (error) {
            console.log('error---------', error);
            res.status(HttpResponse.HTTP_UNPROCESSABLE_ENTITY).send(error);
        }
    }

    getUserDetailsFromUrl = async (url: string) => {
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

export default GithubSearchController;