import {HttpGet,HttpServerAddress } from './request.ts'
const HttpRouterMatchV1 = ""
const HttpRouterUrl = `${HttpServerAddress}${HttpRouterMatchV1}`


export const PingBaidu = (p)=> HttpGet(`${HttpRouterUrl}`, p);