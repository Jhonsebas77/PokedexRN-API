import { Services } from './services'
import { Response, Request } from 'express'

export const userController = {
    getUser: async (req: Request, res: Response) => {
        const data = await Services.getUser(req)
        res.send(data)
    },
    authUser: async (req: Request, res: Response) => {
        console.log('===============authUser=====================');
        console.log('[BODY]', req.body);
        console.log('====================================');
        const data = await Services.authUser(req.body)
        res.send(data)
    },
    createUser: async (req: Request, res: Response) => {
        console.log('===============createUser=====================');
        console.log('[BODY]', req.body);
        console.log('====================================');
        const data = await  Services.createUser(req.body)
        res.send(data)
    }
}