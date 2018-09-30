import { Services } from '../Services'
import { Response, Request } from 'express'

export const Controller = {
    pokedex: async (req: Request, res: Response) => {
        const data = await Services.pokedex()
        res.send(data)
    },
    createPokedex: async (req: Request, res: Response) => {
        const data = await Services.savePokedex(req.body)
        res.send(data)
    },
    updatePokedex: async (req: Request, res: Response) => {
        const data = await Services.updatePokedex(req, res)
        res.send(data)
    },
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