import { Document, Model, model, Schema } from 'mongoose'
export interface ITypeChart extends Document {
    name: string;
    idDex: number;
    sprite: string;
    no_effect: TypeObject[];
    not_very_effective: TypeObject[];
    super_very_effective: TypeObject[];
    weakness: TypeObject[];
    immune: TypeObject[];
    resist: TypeObject[];
}

export interface TypeObject {
    name: string;
    urlSprite: string;
    key: string;
    value: number;
    kind: string;
}

export const TypeSchema: Schema = new Schema({
    name: String,
    sprite: String,
    idDex: Number,
    no_effect: Array,
    not_very_effective: Array,
    super_very_effective: Array,
    weakness: Array,
    immune: Array,
    resist: Array,
}, { timestamps: true, versionKey: false })

export const Type: Model<ITypeChart> = model<ITypeChart>('Types', TypeSchema)
