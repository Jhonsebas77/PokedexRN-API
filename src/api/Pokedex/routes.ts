// import { Controller } from './controller'

// export const routesPokedex: { [index: string]: any } = {
//     Pokedex: {
//         verb: 'get',
//         uri: '/pokedex',
//         action: Controller.pokedex
//     },
//     CreatePokedex: {
//         verb: 'post',
//         uri: '/pokedex',
//         action: Controller.createPokedex
//     },
//     UpdatePokedex: {
//         verb: 'put',
//         uri: '/pokedex/:idDex',
//         action: Controller.updatePokedex
//     }
// }

import { pokedexController } from './controller'
export const pokedexRoutes: { [index: string]: any } = {}