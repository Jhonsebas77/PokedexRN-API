import { pokedexController } from './controller'
export const routesPokedex: { [index: string]: any } = {
    Pokedex: {
        verb: 'get',
        uri: '/pokedex',
        action: pokedexController.pokedex
    },
    CreatePokedex: {
        verb: 'post',
        uri: '/pokedex',
        action: pokedexController.createPokedex
    },
    UpdatePokedex: {
        verb: 'put',
        uri: '/pokedex/:idDex',
        action: pokedexController.updatePokedex
    }
}