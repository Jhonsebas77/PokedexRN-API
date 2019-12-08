import { Document, Model, model, Schema } from 'mongoose'
export interface TypeModel extends IType, Document { }
export const TypeSchema: Schema = new Schema({
    name: String,
    sprite: String,
    idDex: Number,
    offensive: {
        byTwo: [Array],
        byOne: [Array],
        byHalf: [Array],
        byZero: [Array]
    },
    defenssive: {
        byTwo: [Array],
        byOne: [Array],
        byHalf: [Array],
        byZero: [Array]
    }
}, { timestamps: true, versionKey: false })

export const Type: Model<TypeModel> = model<TypeModel>('Types', TypeSchema)
