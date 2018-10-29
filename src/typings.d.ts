declare module "*.json" {
    const value: any;
    export default value;
}

interface IData {
    [key: string]: any
}

interface IitemList {
    name: String,
    url: String,
    urlSprite: String,
    idDex: Number,
    type: String
}

interface ImoveList {
    name: String,
    url: String,
    urlSprite: String,
    idDex: Number,
    type: String
}

interface IPokedex {
    name: String,
    url: String,
    urlSprite: String,
    type: {
        type1: String,
        type2?: String
    }
}

interface Iitem {
    name: String,
    urlSprite: String,
    idDex: Number,
    effect_entries: {},
    held_by_pokemon: {},
    category: String,
    cost: Number,
    fling: {},
    machines: {},
    baby_trigger_for: {},
    evolution_for: {},
    attributes: {}
}

interface Imove {
    name: String,
    urlSprite: String,
    idDex: Number,
    effect_entries: {},
    held_by_pokemon: {},
    category: String,
    cost: Number,
    fling: {},
    machines: {},
    baby_trigger_for: {},
    evolution_for: {},
    attributes: {}
}

declare module "express-healthcheck"