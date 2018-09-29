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
    }
}