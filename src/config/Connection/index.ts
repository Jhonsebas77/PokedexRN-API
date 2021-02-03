const MongoClient = require('mongodb').MongoClient;
import bunyan from 'bunyan'
import config from 'config'
MongoClient.Promise = global.Promise

const { user, pwd, db } = config.get('server.database')
const dbUri = `mongodb+srv://${user}:${pwd}@${db}?retryWrites=true&w=majority`
const log = bunyan.createLogger({ name: 'Mongo Status:' })

export class Database {
    public static connect(user: string, pwd: string, db: string) {
        try {
            MongoClient.connect(`${dbUri}`, { useNewUrlParser: true })
        } catch (error) {
            MongoClient.createConnection(`${dbUri}`)
        }
        MongoClient.connection
            .on('error', () => log.info(` => Error en la conexion`))
            .on('disconnected', () => log.info(` => Se desconecto`))
            .once('open', () => log.info(` => Se establecio la conexion`))
    }
}