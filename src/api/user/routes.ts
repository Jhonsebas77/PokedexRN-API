import { userController } from './controller'

export const routesUser: { [index: string]: any } = {
    GetUser: {
        verb: 'get',
        uri: '/user/:idDex',
        action: userController.getUser
    },
    AuthUser: {
        verb: 'post',
        uri: '/login',
        action: userController.authUser
    },
    CreateUser: {
        verb: 'post',
        uri: '/createUser',
        action: userController.createUser
    },
}