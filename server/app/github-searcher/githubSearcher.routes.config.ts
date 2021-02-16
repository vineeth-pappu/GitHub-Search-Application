import { CommonRoutesConfig } from '../common/common.routes.config';
import express from 'express';
import GithubSearchController from './http/controllers/githubSearchController';
import { githubSearchRequestValidator } from './request-validator/githubSearchRequest.middleware';
import { validate } from './request-validator';

const githubSearchController = new GithubSearchController();
export class GithubSearcherRoutes extends CommonRoutesConfig {

    constructor(app: express.Application) {
        super(app, 'GithubSearcher');
    }

    configureRoutes() {
        this.app.route(`/github/search`)
                .post(githubSearchRequestValidator(), validate, githubSearchController.search)

        return this.app;
    }
}