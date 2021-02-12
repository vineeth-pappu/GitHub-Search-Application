import { Request, Response, Router } from 'express';
import BaseController from '../../../common/baseController';
import HttpResponse from '../../../common/facades/httpResponse';
import httpClient from '../../../common/utils/httpClient'
import githubSearchService from '../../services/githubSearch.service';

class GithubSearchController extends BaseController {

    async searchUsers(req: Request, res: Response) {
        try {
            const query = "qs=tom"
            const { data } = await githubSearchService.users(query)

            res.status(HttpResponse.HTTP_OK).send(data);
        } catch (error) {
            // console.log('error---------', error);
            // throw new Error("users failed")
            res.status(HttpResponse.HTTP_UNPROCESSABLE_ENTITY).send(error);
        }
    }

    async searchRepositories(req: Request, res: Response) {
        try {
            const query = "q=tetris+language:assembly&sort=stars&order=desc"
            const { data } = await githubSearchService.users(query)
            res.status(HttpResponse.HTTP_OK).send(data);
        } catch (error) {
            res.status(HttpResponse.HTTP_UNPROCESSABLE_ENTITY).send(error);
        }
    }

}

export default new GithubSearchController();