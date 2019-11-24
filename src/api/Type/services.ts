import { Type } from '../../database/schemas/Table_type'

export const Services = {
    type: async (req: any, res: any) => {
        const sort = { idDex: 1 }
        try {
            const data = await Type.find().sort(sort)
            return data
        } catch (error) {
            return `Error al buscar los pokemones ${error}`
        }
    },

    createType: async (pokedex: any) => {
        try {
            const data = await Type.create(Object.assign({}, pokedex))
            return data
        } catch (error) {
            return `Error al buscar los tipos ${error}`
        }
    },

    updateType: async (req: any, res: any) => {
        try {
            let idDex = req.params.idDex
            let pokedex = req.body
            const data = await Type.findOneAndUpdate(idDex, pokedex)
            return data
        } catch (error) {
            return `Error al actualizar los tipos  ${error}`
        }
    }
}