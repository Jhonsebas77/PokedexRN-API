import { Pokedex } from '../models/Schema/Pokedex'

export const Services = {
    pokedex: async () => {
        try {
            const data = await Pokedex.find()
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
            return `Error al guardar el pokemon  ${error}`
        }
    },

    updatePokedex: async (req: any, res: any) => {
        let idDex = req.params.idDex;
        let pokedex = req.body;
        try {
            const data = await Pokedex.findOneAndUpdate(idDex, pokedex)
            return data
        } catch (error) {
            return `Error al actualizar el pokemon  ${error}`
        }
    }
}