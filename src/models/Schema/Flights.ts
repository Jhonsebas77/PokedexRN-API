import { Document, Schema, Model, model } from 'mongoose'
import { IFlights } from '../../Interfaces/IFlights'
import { SiteSchema } from './Sites'
import { SegmentSchema } from './Segments'

export interface FlightModel extends IFlights, Document { }

export const FlightSchema: Schema = new Schema({
    origin: {
        type: SiteSchema,
        required: true
    },
    destination: {
        type: SiteSchema,
        required: true
    },
    segments: {
        type: SegmentSchema,
        required: true
    },
    price: {
        required: true,
        type: String,
        default: 0
    },
    image: {
        type: String,
        default: 'https://image.ibb.co/gGdRjH/noairplaneimage.png'
    },
    date: {
        type: Date,
        default: Date.now
    },
    duration: {
        type: String
    },
    airlane: {
        type: String
    },
    airplane: {
        type: String
    },
    class: {
        type: String
    }
}, { timestamps: true, versionKey: false })

export const Flight: Model<FlightModel> = model<FlightModel>('Flight', FlightSchema)