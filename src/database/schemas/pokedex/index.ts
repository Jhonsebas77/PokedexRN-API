import { Document, Model, model, Schema } from 'mongoose'
export interface PokedexModel extends IPokedex, Document { }
export const PokedexSchema: Schema = new Schema({
    name: String,
    url: String,
    urlSprite: String,
    idDex: Number,
    types: [Array]
}, { timestamps: true, versionKey: false })

export const Pokedex: Model<PokedexModel> = model<PokedexModel>('pokedex', PokedexSchema)