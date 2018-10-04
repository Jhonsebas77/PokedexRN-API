import mongoose, { mongo } from 'mongoose'
import bunyan from 'bunyan'
import config from 'config'
mongoose.Promise = global.Promise

const { user, pwd, db } = config.get('server.database')
const dbUri = `mongodb://${user}:${pwd}${db}`
const log = bunyan.createLogger({ name: 'Mongo Status:' })

export class Database {
    public static connect(user: string, pwd: string, db: string) {
        try {
            mongoose.connect(`${dbUri}`, { useNewUrlParser: true })
        } catch (error) {
            mongoose.createConnection(`${dbUri}`)
        }
        mongoose.connection
            .on('error', () => log.info(` => Error en la conexion`))
            .on('disconnected', () => log.info(` => Se desconecto`))
            .once('open', () => log.info(` => Se establecio la conexion`))
    }
    public static debug(debug: any) {
        mongoose.set('debug', debug)
    }
    // const { user, pwd, db } = config.get('server.database')
    // const dbUri = `mongodb://${user}:${pwd}${db}`
    // const log = bunyan.createLogger({ name: 'Mongo Status:' })
    // mongoose.connect(dbUri)
    // export const Connect = () => {
    //     mongoose.connection
    //         .on('error', () => log.info(` => Error en la conexion`))
    //         .on('disconnected', () => log.info(` => Se desconecto`))
    //         .once('open', () => log.info(` => Se establecio la conexion`))
    // }
}