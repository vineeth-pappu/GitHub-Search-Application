import { CommonRoutesConfig } from '../common/common.routes.config';
import express, { Response, Request } from 'express';
import GithubSearchController from './http/controllers/githubSearchController';
import { githubSearchRequestValidator } from './request-validator/githubSearchRequest.middleware';
import { validate } from './request-validator';
import { CACHE_CLEAR_ASYNC } from '../common/utils/redisClient';
import HttpResponse from '../common/facades/httpResponse';

const githubSearchController = new GithubSearchController();
export class GithubSearcherRoutes extends CommonRoutesConfig {

    constructor(app: express.Application) {
        super(app, 'GithubSearcher');
    }

    configureRoutes() {
        this.app.route(`/github/search`)
            .post(githubSearchRequestValidator(), validate, githubSearchController.search)

        this.app.route(`/clear-cache`).get(async (req: Request, res: Response) => {
            await CACHE_CLEAR_ASYNC()
            res.status(HttpResponse.HTTP_OK).send("Cache cleared");
        })

        return this.app;
    }
}