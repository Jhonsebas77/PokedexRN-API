import { Services } from './services'
import { Response, Request } from 'express'

export const itemController = {
    item: async (req: Request, res: Response) => {
        const data = await Services.item(req)
        res.send(data)
    },
    createItem: async (req: Request, res: Response) => {
        const data = await Services.saveitem(req.body)
        res.send(data)
    },
    updateItem: async (req: Request, res: Response) => {
        const data = await Services.updateItem(req, res)
        res.send(data)
    }
}