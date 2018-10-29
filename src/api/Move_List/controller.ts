import { Services } from './services'
import { Response, Request } from 'express'

export const moveListController = {
    moveList: async (req: Request, res: Response) => {
        const data = await Services.moveList()
        res.send(data)
    },
    createMoveList: async (req: Request, res: Response) => {
        const data = await Services.saveMoveList(req.body)
        res.send(data)
    },
    updateMoveList: async (req: Request, res: Response) => {
        const data = await Services.updateMoveList(req, res)
        res.send(data)
    }
}