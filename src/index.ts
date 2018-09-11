process.env.NODE_CONFIG_DIR = `${__dirname}/env`
import { InfraWeb } from './core/infraweb'
import { middleware } from './middlewares'
import { Routes } from './routes'
import { Connect } from './config/Connection'

export default class Server extends InfraWeb {
    constructor() {
        super()
        Connect()
        this.use(middleware)
        this.mountRoutes(Routes)
    }
    public static bootstrap(): Server {
        return new Server()
    }
}
Server.bootstrap().startServer()