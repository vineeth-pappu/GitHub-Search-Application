import { CommonRoutesConfig } from '../common/common.routes.config';
import express from 'express';
import githubSearchController from './http/controllers/githubSearchController';

export class GithubSearcherRoutes extends CommonRoutesConfig {

    constructor(app: express.Application) {
        super(app, 'GithubSearcher');
    }

    configureRoutes() {
        this.app.route(`/GithubSearcher/users`).get(githubSearchController.searchUsers)

        this.app.route(`/GithubSearcher/repositories`).get(githubSearchController.searchRepositories)

        return this.app;
    }
}