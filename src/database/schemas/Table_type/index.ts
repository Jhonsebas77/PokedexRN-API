import { Document, Model, model, Schema } from 'mongoose'
export interface TypeModel extends IType, Document { }
export const TypeSchema: Schema = new Schema({
    name: String,
    sprite: String,
    idDex: Number,
    weaknesses: [Array],
    strengths: [Array],
    resistants: [Array],
    vulnerables: [Array]
}, { timestamps: true, versionKey: false })

export const Type: Model<TypeModel> = model<TypeModel>('Types', TypeSchema)
