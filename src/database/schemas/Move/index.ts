import { Document, Model, model, Schema } from 'mongoose'
export interface MoveModel extends Imove, Document { }
export const MoveSchema: Schema = new Schema({
    name: String,
    idDex: Number,
    battleType: {
        name: String,
        url: String,
        sprite: String
    },
    category: {
        name: String,
        url: String,
        sprite: String
    },
    basePower: Number,
    accuracy: Number,
    pp: Number,
    priority: Number,
    target: String,
    effect_entries: {
        effect: String,
        short_effect: String,
        flavor_text: String
    },
    effect_changes: {
        status: String,
        porcent: String
    },
    machines: [Array],
    meta: {
        crit_rate: Number,
        drain: Number,
        flinch_chance: Number,
        healing: Number,
        max_hits: Number,
        max_turns: Number,
        min_hits: Number,
        min_turns: Number,
        stat_chance: Number
    },
    zPower: {
        name: String,
        effect: String,
        urlSprite: String,
        basePower: Number,
        baseAtk: String
    },
    pokemon_learn: [Array]
}, { timestamps: true, versionKey: false })
export const Move: Model<MoveModel> = model<MoveModel>('move', MoveSchema)