import { Request, Response, Router } from 'express';
import BaseController from '../../../common/baseController';
import HttpResponse from '../../../common/facades/httpResponse';

class GithubSearchController extends BaseController {

    async searchUsers(req: Request, res: Response) {
        res.status(HttpResponse.HTTP_OK).send(`List of users`);

    }

    async searchRepositories(req: Request, res: Response) {
        res.status(HttpResponse.HTTP_OK).send(`List of repositories`);

    }

}

export default new GithubSearchController();