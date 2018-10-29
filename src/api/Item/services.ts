import { Item } from '../../database/schemas/Item'

export const Services = {
    item: async (req: any) => {
        try {
            let idDex = req.params.idDex;
            const data = await Item.findOne({ idDex })
            return data
        } catch (error) {
            return `Error al buscar los items ${error}`
        }
    },

    saveitem: async (item: any) => {
        try {
            const data = await Item.create(Object.assign({}, item))
            return data
        } catch (error) {
            return `Error crear el Item ${error}`
        }
    },

    updateItem: async (req: any, res: any) => {
        try {
            let idDex = req.params.idDex;
            let item = req.body;
            const data = await Item.findOneAndUpdate(idDex, item)
            return data
        } catch (error) {
            return `Error al actualizar el item  ${error}`
        }
    },
}