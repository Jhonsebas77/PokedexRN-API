import mongoose, { mongo } from 'mongoose'
import bunyan from 'bunyan'
import config from 'config'

const {usr, pwd, longURL } = config.get('server')
const dbUri = `mongodb://${usr}:${pwd}${longURL}`
const log = bunyan.createLogger({ name: 'Mongo Status:' })
mongoose.connect(dbUri)
export const Connect = () => {
    mongoose.connection
        .on('error', () => log.info(` => Error en la conexion`))
        .on('disconnected', () => log.info(` => Se desconecto`))
        .once('open', () => log.info(` => Se establecio la conexion`))
}