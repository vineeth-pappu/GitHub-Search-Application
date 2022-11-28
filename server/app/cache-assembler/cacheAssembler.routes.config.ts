import { CommonRoutesConfig } from '../common/common.routes.config';
import express, { Response, Request } from 'express';
import { cacheAssemblerRequestValidator } from './request-validator/cacheAssemblerRequest.middleware';
import { validate } from './request-validator';
import { CACHE_CLEAR_ASYNC } from '../common/utils/redisClient';
import HttpResponse from '../common/facades/httpResponse';
import CacheAssemblerController from './http/controllers/cacheAssemblerController';

const cacheAssemblerController = new CacheAssemblerController();
export const BASE_PATH = '/cache-assembler';
export class CacheAssemblerRoutes extends CommonRoutesConfig {

    constructor(app: express.Application) {
        super(app, 'CacheAssembler');
    }

    configureRoutes() {

        this.app.route(`${BASE_PATH}/clear-cache`).get(async (req: Request, res: Response) => {
            await CACHE_CLEAR_ASYNC()
            res.status(HttpResponse.HTTP_OK).send("Cache cleared");
        })
        
        this.app.route(`${BASE_PATH}/*`)
            .all(cacheAssemblerRequestValidator(), validate, cacheAssemblerController.search)

        return this.app;
    }
}