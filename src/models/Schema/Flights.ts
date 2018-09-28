import { Document, Schema, Model, model } from 'mongoose'
import { IFlights } from '../../Interfaces/IFlights'
import { SiteSchema } from './Sites'
import { SegmentSchema } from './Segments'

export interface FlightModel extends IFlights, Document { }

export const FlightSchema: Schema = new Schema({
    name: String,
    url: String,
    urlSprite: String,
    types: [Array]
}, { timestamps: true, versionKey: false })

export const Flight: Model<FlightModel> = model<FlightModel>('pokedex', FlightSchema)