process.env.NODE_CONFIG_DIR = `${__dirname}/env`
import { Core } from './core/infraweb'
import { middlewareServer } from './middlewares'
export class Server extends Core {
    public static bootstrap() {
        return new Server()
    }
    constructor() {
        super()
        this.mountMiddleware(middlewareServer)
    }
}
Server.bootstrap().startServer()