import { Document, Model, model, Schema } from 'mongoose'
export interface MoveListModel extends ImoveList, Document { }
export const MoveListSchema: Schema = new Schema({
    name: String,
    url: String,
    idDex: Number,
    battleType: String,
    spriteBattleType: String,
    category: String,
    spriteCategory: String,
    basePower: Number,
    accuracy:Number
}, { timestamps: true, versionKey: false })
export const Move_list: Model<MoveListModel> = model<MoveListModel>('move_list', MoveListSchema)