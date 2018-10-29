import { moveController } from './controller'

export const routesMove: { [index: string]: any } = {
    Move: {
        verb: 'get',
        uri: '/move',
        action: moveController.move
    },
    CreateMove: {
        verb: 'post',
        uri: '/move',
        action: moveController.createMove
    },
    UpdateMove: {
        verb: 'put',
        uri: '/move/:idDex',
        action: moveController.updateMove
    }
}