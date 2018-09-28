import { ISites } from './ISites'
import { ISegments } from './ISegments'
export interface IFlights {
    name: String,
    url: String,
    urlSprite: String,
    type: {
        type1: String,
        type2?: String
    }
}