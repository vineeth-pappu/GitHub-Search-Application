import { CommonRoutesConfig } from '../common/common.routes.config';
import express from 'express';

export class GithubSearcherRoutes extends CommonRoutesConfig {

    constructor(app: express.Application) {
        super(app, 'GithubSearcher');
    }

    configureRoutes() {
        this.app.route(`/GithubSearcher/users`)
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send(`List of users`);
            })

        this.app.route(`/GithubSearcher/repositories`)
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send(`List of repositories`);
            })

        return this.app;
    }
}