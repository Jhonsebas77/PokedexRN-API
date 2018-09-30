import { Pokedex } from '../models/Schema/Pokedex'
import { Item_list } from '../models/Schema/Item_list'
import { Item } from '../models/Schema/Item'

export const Services = {
    //Listado Pokedex
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
            return `Error al buscar los pokemones ${error}`
        }
    },

    updatePokedex: async (req: any, res: any) => {
        try {
            let idDex = req.params.idDex;
            let pokedex = req.body;
            const data = await Pokedex.findOneAndUpdate(idDex, pokedex)
            return data
        } catch (error) {
            return `Error al actualizar el pokemon  ${error}`
        }
    },
    //Listado Objetos
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
    },
    //Objetos
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