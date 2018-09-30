
import { Document, Schema, Model, model } from 'mongoose'
import { IitemList } from '../../Interfaces/IitemList';

export interface ItemModel extends IitemList, Document { }

export const ItemSchema: Schema = new Schema({
    name: String,
    url: String,
    urlSprite: String,
    idDex: Number,
    type: String
}, { timestamps: true, versionKey: false })

export const Item_list: Model<ItemModel> = model<ItemModel>('item_list', ItemSchema)