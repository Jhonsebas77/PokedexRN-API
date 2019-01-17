import { Pokedex } from '../../database/schemas/pokedex'

export const Services = {
    pokedex: async () => {
        const sort = { idDex: 1 }
        try {
            const data = await Pokedex.find().sort(sort)
            return data
        } catch (error) {
            return `Error al buscar los pokemones ${error}`
        }
    },

    savePokedex: async (pokedex: any) => {
        try {
            const data = await Pokedex.create(Object.assign({}, pokedex))
            return data
        } catch (error) {
            return `Error al buscar los pokemones ${error}`
        }
    },

    updatePokedex: async (req: any, res: any) => {
        try {
            let idDex = req.params.idDex
            let pokedex = req.body
            const data = await Pokedex.findOneAndUpdate(idDex, pokedex)
            return data
        } catch (error) {
            return `Error al actualizar el pokemon  ${error}`
        }
    }
}