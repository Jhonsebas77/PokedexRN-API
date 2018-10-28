import express from 'express'
export class ExpressApp implements IData {
    public middleware: express.Application
    constructor() {
        this.middleware = express()
    }
}