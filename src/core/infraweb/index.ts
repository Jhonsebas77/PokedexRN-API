import express, { Request, Response, Router } from 'express'
import config from 'config'
import http from 'http'
import bunyan from 'bunyan'

export abstract class InfraWeb {
    public app: any
    private server: any
    constructor() {
        this.app = express()
    }

    public use(middlewares: any): void {
        Object.keys(middlewares).forEach((key) => {
            this.app.use(middlewares[key].mountPoint, middlewares[key].handler)
        })
        this.app.use(express.static(`${__dirname}/public`))
    }

    public mountRoutes(routes: any): void {
        Object.keys(routes).forEach((key) => {
            this.app[routes[key].verb](routes[key].uri, routes[key].action)
        })
    }

    public startServer() {
        const { port, env } = config.get('server')
        this.server = http.createServer(this.app)
        this.server.listen(process.env.PORT || port, () => {
            const log = bunyan.createLogger({ name: 'Start Server:' })
            log.info(`=> Servidor corriendo en el puerto ${process.env.PORT || port} en ${env} mode`)
        })
    }

}