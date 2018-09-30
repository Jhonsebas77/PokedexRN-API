import { Controller } from '../Controllers'

export const Routes: { [index: string]: any } = {
    Pokedex: {
        verb: 'get',
        uri: '/pokedex',
        action: Controller.pokedex
    },
    CreatePokedex: {
        verb: 'post',
        uri: '/pokedex',
        action: Controller.createPokedex
    },
    UpdatePokedex: {
        verb: 'put',
        uri: '/pokedex/:idDex',
        action: Controller.updatePokedex
    },
    Item_List: {
        verb: 'get',
        uri: '/itemlist',
        action: Controller.itemList
    },
    CreateItem_List: {
        verb: 'post',
        uri: '/itemlist',
        action: Controller.createItemList
    },
    UpdateItem_List: {
        verb: 'put',
        uri: '/itemlist/:idDex',
        action: Controller.updateItemList
    }
}