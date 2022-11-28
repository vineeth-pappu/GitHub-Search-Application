import { Request, Response } from 'express';
import BaseController from '../../../common/baseController';
import HttpResponse from '../../../common/facades/httpResponse';
import cacheAssemblerService from '../../services/cacheAssembler.service';
import { CACHE_SETEX_ASYNC, CACHE_GET_ASYNC } from '../../../common/utils/redisClient';
import { BASE_PATH } from '../../cacheAssembler.routes.config';

class CacheAssemblerController extends BaseController {

    search = async (req: Request, res: Response) => {
        try {
            const url = req.url
    
            // check in cache
            const dataInCache = await CACHE_GET_ASYNC(url) as string;
            if (dataInCache) {
                console.log('\n ::: Data in Cache ::::: ', url)
                // send cached data
                res.status(HttpResponse.HTTP_OK).send(JSON.parse(dataInCache));
                return
            }
            console.log('\n ::: Data NOT in Cache ::::: ', url)

            const pathToCMS = url.replace(BASE_PATH, "")
            const { data } = await cacheAssemblerService.get(pathToCMS)

            // set data in cache
            await CACHE_SETEX_ASYNC(url, Number(process.env.CACHE_DURATION), JSON.stringify(data))

            res.status(HttpResponse.HTTP_OK).send(data);

        } catch (error) {
            console.log('error---------', error);
            // throw new Error("get CMS data failed")
            res.status(HttpResponse.HTTP_UNPROCESSABLE_ENTITY).send(error);
        }
    }

}

export default CacheAssemblerController;