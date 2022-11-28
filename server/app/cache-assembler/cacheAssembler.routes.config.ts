import { CommonRoutesConfig } from '../common/common.routes.config';
import express, { Response, Request } from 'express';
import { cacheAssemblerRequestValidator } from './request-validator/cacheAssemblerRequest.middleware';
import { validate } from './request-validator';
import { CACHE_CLEAR_ASYNC } from '../common/utils/redisClient';
import HttpResponse from '../common/facades/httpResponse';
import CacheAssemblerController from './http/controllers/cacheAssemblerController';

const cacheAssemblerController = new CacheAssemblerController();
export class CacheAssemblerRoutes extends CommonRoutesConfig {

    constructor(app: express.Application) {
        super(app, 'CacheAssembler');
    }

    configureRoutes() {
        this.app.route(`/cache-assembler`)
            .get(cacheAssemblerRequestValidator(), validate, cacheAssemblerController.search)

        this.app.route(`/clear-cache`).get(async (req: Request, res: Response) => {
            await CACHE_CLEAR_ASYNC()
            res.status(HttpResponse.HTTP_OK).send("Cache cleared");
        })

        return this.app;
    }
}