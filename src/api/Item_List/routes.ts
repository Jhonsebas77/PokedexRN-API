import { itemListController } from './controller'

export const routesItemList: { [index: string]: any } = {
    Item_List: {
        verb: 'get',
        uri: '/itemlist',
        action: itemListController.itemList
    },
    CreateItem_List: {
        verb: 'post',
        uri: '/itemlist',
        action: itemListController.createItemList
    },
    UpdateItem_List: {
        verb: 'put',
        uri: '/itemlist/:idDex',
        action: itemListController.updateItemList
    }
}