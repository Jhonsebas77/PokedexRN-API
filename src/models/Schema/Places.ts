import { Document, Schema, Model, model } from 'mongoose'
import { IPlaces } from '../../Interfaces/IPlaces'

export interface PlacesModel extends IPlaces, Document { }

export const PlacesSchema: Schema = new Schema({
    nameCity: {
        required: true,
        type: String
    },
    nameCountry: {
        required: true,
        type: String
    },
    nameAirport: {
        required: true,
        type: String
    },
    iata: {
        required: true,
        type: String
    }
}, { timestamps: true, versionKey: false })

export const Place: Model<PlacesModel> = model<PlacesModel>('Place', PlacesSchema)