import { Move_list } from '../../database/schemas/Move_list'

export const Services = {
    moveList: async () => {
        try {
            const data = await Move_list.find()
            return data
        } catch (error) {
            return `Error al buscar los items ${error}`
        }
    },

    saveMoveList: async (item_list: any) => {
        try {
            const data = await Move_list.create(Object.assign({}, item_list))
            return data
        } catch (error) {
            return `Error crear el Item ${error}`
        }
    },

    updateMoveList: async (req: any, res: any) => {
        try {
            let idDex = req.params.idDex;
            let itemList = req.body;
            const data = await Move_list.findOneAndUpdate(idDex, itemList)
            return data
        } catch (error) {
            return `Error al actualizar el item  ${error}`
        }
    }  
}