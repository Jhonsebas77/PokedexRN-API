import cors from 'cors'
import bodyParser from 'body-parser'
import config from 'config'
export const middleware: { [index: string]: any } = {
    cors: {
        mountPoint: '',
        handler: cors()
    },
    urlencodedParser: {
        mountPoint: '',
        handler: bodyParser.urlencoded({ extended: false })
    },
    jsonParser: {
        mountPoint: '',
        handler: bodyParser.json()
    }
}
