import { pokemonController } from './controller'

export const routesPokemon: { [index: string]: any } = {
    Pokemon: {
        verb: 'get',
        uri: '/pokemon/:idDex',
        action: pokemonController.pokemon
    },
    CreatePokemon: {
        verb: 'post',
        uri: '/pokemon',
        action: pokemonController.createPokemon
    },
    UpdatePokemon: {
        verb: 'put',
        uri: '/pokemon/:idDex',
        action: pokemonController.updatePokemon
    }
}