import { typeController } from './controller'

export const routesType: { [index: string]: any } = {
    Type: {
        verb: 'get',
        uri: '/type',
        action: typeController.type
    },
    CreateType: {
        verb: 'post',
        uri: '/type',
        action: typeController.createType
    },
    UpdateType: {
        verb: 'put',
        uri: '/type/:idDex',
        action: typeController.updateType
    }
}