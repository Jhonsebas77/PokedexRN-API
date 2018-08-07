import { Document, Schema, Model, model } from 'mongoose'
import { SiteSchema } from './Sites'

export const SegmentSchema: Schema = new Schema({
    arrive: {
        type: SiteSchema,
        required: true
    },
    depart: {
        type: SiteSchema,
        required: true
    },
    duration: {
        type: String
    }
}, { timestamps: true, versionKey: false })
