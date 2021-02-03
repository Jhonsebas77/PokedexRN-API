import config from 'config'
import { Database } from '../../database/connection'
import { ExpressApp } from '../app'
export class Core {
    public middleware: any
    public configuration: string
    constructor() {
        this.middleware = new ExpressApp().middleware
        this.configuration = config.get('server')
    }
    public use(...args: any[]) {
        this.middleware.use(...args)
        return this
    }
    public mountRoutes(routes: any) {
        routes.map((subRoutes: any) => {
            Object.keys(subRoutes).forEach((key) => {
                this.middleware[subRoutes[key].verb](subRoutes[key].uri, subRoutes[key].action)
            })
        })
    }
    public mountMiddleware(middlewares: any) {
        Object.keys(middlewares).forEach((key) => {
            this.middleware.use(middlewares[key].mountPoint, middlewares[key].handler)
        })
    }
    public listen(port: any, listeningListener: () => void | undefined) {
        this.middleware.listen(port, listeningListener)
    }
    public startServer() {
        Database.connect(
            (this.configuration as any).database.user,
            (this.configuration as any).database.pwd,
            (this.configuration as any).database.db),
        // Database.debug(true)
        this.listen(
            process.env.PORT || (this.configuration as any).port,
            () => console.log(`Server Running at localhost:${process.env.PORT || (this.configuration as any).port}`)
        )
    }
}