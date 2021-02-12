import { Request, Response, Router } from 'express';
import BaseController from '../../../common/baseController';
import HttpResponse from '../../../common/facades/httpResponse';
import httpClient from '../../../common/utils/httpClient'
import githubSearchService from '../../services/githubSearch.service';

class GithubSearchController extends BaseController {

    async searchUsers(req: Request, res: Response) {
        try {
            const { data } = await githubSearchService.users(req.query)

            const usersWithDetails = data.items.map((u: { url: string; }) => {
                return new Promise((resolve, reject) => {
                    githubSearchService.userDetails(u.url).then(res => {
                        resolve(res.data)
                    }).catch(err => {
                        console.log('user details promise error', err);
                        resolve(null)
                    })
                })
            })

            data.items = await Promise.all(usersWithDetails)

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

}

export default new GithubSearchController();