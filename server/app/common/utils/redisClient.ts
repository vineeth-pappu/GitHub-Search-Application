import redis from 'redis'
import { promisify } from "util";

// export const redisClient = redis.createClient(Number(process.env.REDIS_PORT))
export const redisClient = {
    get: (key: string) => {  },
    setex: (key: string, t: number, v: string) => { }
}


export const CACHE_GET_ASYNC = promisify(redisClient.get).bind(redisClient)
export const CACHE_SETEX_ASYNC = promisify(redisClient.setex).bind(redisClient)