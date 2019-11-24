import { Services } from './services'
import { Response, Request } from 'express'

export const typeController = {
    type: async (req: Request, res: Response) => {
        const data = await Services.type(req, res)
        res.send(data)
    },
    createType: async (req: Request, res: Response) => {
        const data = await Services.createType(req.body)
        res.send(data)
    },
    updateType: async (req: Request, res: Response) => {
        const data = await Services.updateType(req, res)
        res.send(data)
    }
}