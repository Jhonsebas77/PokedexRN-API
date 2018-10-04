import bodyParser from 'body-parser'
import cors from 'cors'
import expressHealthCheck from 'express-healthcheck'
import { allRoutes } from '../api/routes'
export const middlewareServer: { [index: string]: any } = {
    cors: {
        mountPoint: '',
        handler: cors()
    },
    urlencodedParser: {
        mountPoint: '',
        handler: bodyParser.urlencoded({ extended: false })
    },
    jsonParser: {
        mountPoint: '',
        handler: bodyParser.json()
    },
    healthCheck: {
        mountPoint: '/health',
        handler: expressHealthCheck()
    }
}
export const routesServer = allRoutes