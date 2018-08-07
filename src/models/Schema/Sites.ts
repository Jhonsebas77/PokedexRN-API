import { Document, Schema, Model, model } from 'mongoose'

export const SiteSchema: Schema = new Schema({
    iata: { required: true, type: String },
    name: { required: true, type: String },
    airport: { required: true, type: String},
    time: {required: true, type: String}
})
