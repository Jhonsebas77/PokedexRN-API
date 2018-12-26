import { Document, Model, model, Schema } from 'mongoose'
export interface PokemonModel extends IPokemon, Document { }
export const PokemonSchema: Schema = new Schema({
    name: String,
    height: String,
    weight: String,
    idDex: Number,
    sprites: {
        male: String,
        shiny_male: String,
        female: String,
        shiny_female: String,
        mega_shiny_1: String,
        mega_1: String,
        mega_shiny_2: String,
        mega_2: String,
        alola: String,
        alola_shiny: String
    },
    object: {
        name: String,
        spriteURL: String
    },
    abilities: [Array],
    forms: [Array],
    stats: {
        speed: Number,
        special_defense: Number,
        special_attack: Number,
        defense: Number,
        attack: Number,
        hp: Number
    },
    types: [Array],
    dex_entry: {
        classification: String,
        flavor_text: String
    },
    line_evolution: [Array]
}, { timestamps: true, versionKey: false })

export const Pokemon: Model<PokemonModel> = model<PokemonModel>('pokemon', PokemonSchema)