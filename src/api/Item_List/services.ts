import { Item_list } from '../../database/schemas/Item_list'

export const Services = {
    itemList: async () => {
        try {
            const data = await Item_list.find()
            return data
        } catch (error) {
            return `Error al buscar los items ${error}`
        }
    },

    saveitemList: async (item_list: any) => {
        try {
            const data = await Item_list.create(Object.assign({}, item_list))
            return data
        } catch (error) {
            return `Error crear el Item ${error}`
        }
    },

    updateItemList: async (req: any, res: any) => {
        try {
            let idDex = req.params.idDex;
            let itemList = req.body;
            const data = await Item_list.findOneAndUpdate(idDex, itemList)
            return data
        } catch (error) {
            return `Error al actualizar el item  ${error}`
        }
    }  
}