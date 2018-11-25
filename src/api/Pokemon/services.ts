import { Pokemon } from '../../database/schemas/Pokemon'

export const Services = {
    pokemon: async (req: any, res: any) => {
        try {
            let idDex = req.params.idDex
            const data = await Pokemon.findOne({ idDex })
            return data
        } catch (error) {
            return `Error al buscar los pokemones ${error}`
        }
    },

    savePokemon: async (pokedex: any) => {
        try {
            const data = await Pokemon.create(Object.assign({}, pokedex))
            return data
        } catch (error) {
            return `Error al buscar los pokemones ${error}`
        }
    },

    updatePokemon: async (req: any, res: any) => {
        try {
            let idDex = req.params.idDex
            let pokedex = req.body
            const data = await Pokemon.findOneAndUpdate(idDex, pokedex)
            return data
        } catch (error) {
            return `Error al actualizar el pokemon  ${error}`
        }
    }
}