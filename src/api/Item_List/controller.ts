import { Services } from './services'
import { Response, Request } from 'express'

export const itemListController = {
    itemList: async (req: Request, res: Response) => {
        const data = await Services.itemList()
        res.send(data)
    },
    createItemList: async (req: Request, res: Response) => {
        const data = await Services.saveitemList(req.body)
        res.send(data)
    },
    updateItemList: async (req: Request, res: Response) => {
        const data = await Services.updateItemList(req, res)
        res.send(data)
    }
}