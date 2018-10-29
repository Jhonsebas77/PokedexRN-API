import { Services } from './services'
import { Response, Request } from 'express'

export const moveController = {
    move: async (req: Request, res: Response) => {
        const data = await Services.move()
        res.send(data)
    },
    createMove: async (req: Request, res: Response) => {
        const data = await Services.saveMove(req.body)
        res.send(data)
    },
    updateMove: async (req: Request, res: Response) => {
        const data = await Services.updateMove(req, res)
        res.send(data)
    }
}