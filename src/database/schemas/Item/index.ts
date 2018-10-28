import { Document, Model, model, Schema } from 'mongoose'
export interface ItemModel extends Iitem, Document { }
export const ItemSchema: Schema = new Schema({
    name: String,
    urlSprite: String,
    idDex: Number,
    effect_entries: [Array],
    held_by_pokemon: [Array],
    category: String,
    cost: Number,
    fling: [Array],
    machines: [Array],
    baby_trigger_for: [Array],
    evolution_for: [Array],
    attributes: [Array]
}, { timestamps: true, versionKey: false })
export const Item: Model<ItemModel> = model<ItemModel>('item', ItemSchema)