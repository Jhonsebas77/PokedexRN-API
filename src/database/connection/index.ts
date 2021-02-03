const mongoose = require('mongoose')

export class Database {
    public static connect(user: string, password: string, db: string) {
        const url = `mongodb://${user}:${password}@${db}?ssl=true&replicaSet=atlas-11n5sw-shard-0&authSource=admin&retryWrites=true&w=majority`;
        mongoose.connect(url, { useNewUrlParser: true })
            .then(() => {
                console.log('Connected to database ')
            })
            .catch((err: any) => {
                console.error(`Error connecting to the database. \n${err}`);
            })
        mongoose.connection
            .once('open', () => console.log('MongoDB connection success'))
            .on('error', (err: any) => console.error(err))
    }
    public static debug(debug: any) {
        mongoose.set('debug', debug)
    }
}
