import { Document, Model, model, Schema } from 'mongoose'
export interface ItemListModel extends IitemList, Document { }
export const ItemListSchema: Schema = new Schema({
    name: String,
    url: String,
    urlSprite: String,
    idDex: Number,
    type: String
}, { timestamps: true, versionKey: false })
export const Item_list: Model<ItemListModel> = model<ItemListModel>('item_list', ItemListSchema)