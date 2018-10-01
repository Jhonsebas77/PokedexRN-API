import { Services } from '../Services'
import { Response, Request } from 'express'

export const Controller = {
    //Listado Pokedex
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
    //Listado Objetos
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
    },
    //Objetos
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