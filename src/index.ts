/**
 * Este fichero se encarga de unir e inicializar todo
 * nodemon Index.src -> server class -> listen() -> InfraWeb
 */
process.env.NODE_CONFIG_DIR = `${__dirname}/env` // Seteo la carpeta donde esta la config
import { InfraWeb } from './core/infraweb' // Entiendo de InfraWeb? por que y
// para que? por que levanta Express, no es para poder usar los metodos de alla
import { middleware } from './middlewares'
import { Routes } from './routes'
import { Connect } from './config/Connection'
import http from 'http'

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