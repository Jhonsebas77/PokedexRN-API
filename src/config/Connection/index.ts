import mongoose, { mongo } from 'mongoose'
import bunyan from 'bunyan'

const dbUri = 'mongodb://sebastian.otalora:Almundo2018@ds253879.mlab.com:53879/almundo_jsob'
const log = bunyan.createLogger({ name: 'Mongo Status:' })
mongoose.connect(dbUri)
export const Connect = () => {
    mongoose.connection
        .on('error', () => log.info(` => Error en la conexion`))
        .on('disconnected', () => log.info(` => Se desconecto`))
        .once('open', () => log.info(` => Se establecio la conexion`))
}