import { Move } from '../../database/schemas/Move'

export const Services = {
    move:  async (req: any) => {
        try {
            let idDex = req.params.idDex;
            const data = await Move.findOne({ idDex })
            return data
        } catch (error) {
            return `Error al buscar los items ${error}`
        }
    },

    saveMove: async (item_list: any) => {
        try {
            const data = await Move.create(Object.assign({}, item_list))
            return data
        } catch (error) {
            return `Error crear el Item ${error}`
        }
    },

    updateMove: async (req: any, res: any) => {
        try {
            let idDex = req.params.idDex;
            let itemList = req.body;
            const data = await Move.findOneAndUpdate(idDex, itemList)
            return data
        } catch (error) {
            return `Error al actualizar el item  ${error}`
        }
    }  
}