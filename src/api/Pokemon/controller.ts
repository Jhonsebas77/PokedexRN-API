import { Services } from './services'
import { Response, Request } from 'express'

export const pokemonController = {
    pokemon: async (req: Request, res: Response) => {
        const data = await Services.pokemon(req, res)
        res.send(data)
    },
    createPokemon: async (req: Request, res: Response) => {
        const data = await Services.savePokemon(req.body)
        res.send(data)
    },
    updatePokemon: async (req: Request, res: Response) => {
        const data = await Services.updatePokemon(req, res)
        res.send(data)
    }
}