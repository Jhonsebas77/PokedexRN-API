import { itemController } from './controller'

export const Routes: { [index: string]: any } = {
    Item: {
        verb: 'get',
        uri: '/item/:idDex',
        action: itemController.item
    },
    CreateItem: {
        verb: 'post',
        uri: '/item',
        action: itemController.createItem
    },
    UpdateItem: {
        verb: 'put',
        uri: '/item/:idDex',
        action: itemController.updateItem
    }
}