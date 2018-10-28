import { moveListController } from './controller'

export const routesMoveList: { [index: string]: any } = {
    Move_List: {
        verb: 'get',
        uri: '/movelist',
        action: moveListController.moveList
    },
    CreateMove_List: {
        verb: 'post',
        uri: '/movelist',
        action: moveListController.createMoveList
    },
    UpdateMove_List: {
        verb: 'put',
        uri: '/movelist/:idDex',
        action: moveListController.updateMoveList
    }
}