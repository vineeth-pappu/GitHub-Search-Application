import { CommonRoutesConfig } from '../common/common.routes.config';
import express from 'express';
import GithubSearchController from './http/controllers/githubSearchController';

const githubSearchController = new GithubSearchController();
export class GithubSearcherRoutes extends CommonRoutesConfig {

    constructor(app: express.Application) {
        super(app, 'GithubSearcher');
    }

    configureRoutes() {
        this.app.route(`/github/search`).post(githubSearchController.search)

        return this.app;
    }
}