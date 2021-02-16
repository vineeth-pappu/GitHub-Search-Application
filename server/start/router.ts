import { app } from "./app";
import express from 'express';
import { CommonRoutesConfig } from '../app/common/common.routes.config';
import { GithubSearcherRoutes } from '../app/github-searcher/githubSearcher.routes.config';

export default class Router {

    routes: Array<CommonRoutesConfig> = [];

    constructor() {
        this.init()
    }

    init() {
        // here we are adding the UserRoutes to our array,
        // after sending the Express.js application object to have the routes added to our app!
        this.routes.push(new GithubSearcherRoutes(app));

        // this is a simple route to make sure everything is working properly
        app.get('/', (req: express.Request, res: express.Response) => {
            res.status(200).send(`Server up and running!`)
        });
    }
}