import mongoose from 'mongoose'
mongoose.Promise = global.Promise
export class Database {
    public static connect(user: string, password: string, db: string) {
        try {
            mongoose.connect(`mongodb://${user}:${password}@${db}`, { useNewUrlParser: true })
        } catch (error) {
            mongoose.createConnection(`mongodb://${user}:${password}@${db}`)
        }
        mongoose.connection
            .once('open', () => console.log('MongoDB connection success'))
            .on('error', (e) => console.error(e))
    }
    public static debug(debug: any) {
        mongoose.set('debug', debug)
    }
}
