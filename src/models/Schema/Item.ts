
import { Document, Schema, Model, model } from 'mongoose'
import { Iitem } from '../../Interfaces/Iitem';

export interface ItemModel extends Iitem, Document { }

export const ItemSchema: Schema = new Schema({
    name: String,
    urlSprite: String,
    idDex: Number,
    effect: String,
    category: String
}, { timestamps: true, versionKey: false })

export const Item: Model<ItemModel> = model<ItemModel>('item', ItemSchema)