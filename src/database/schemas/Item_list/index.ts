import { Document, Model, model, Schema } from 'mongoose'
export interface ItemListModel extends IitemList, Document { }
export const ItemListSchema: Schema = new Schema({
    name: String,
    url: String,
    urlSprite: String,
    idDex: Number,
    type: String,
    effect_entries: {
        effect: String
    },
    held_by_pokemon: [Array],
    category: String,
    cost: Number,
    fling: [Array],
    machines: [Array],
    baby_trigger_for: [Array],
    evolution_for: [Array],
    attributes: [Array]
}, { timestamps: true, versionKey: false })
export const Item_list: Model<ItemListModel> = model<ItemListModel>('item_list', ItemListSchema)