import { ISites } from './ISites'
import { ISegments } from './ISegments'
export interface IFlights {
    origin: ISites,
    destination: ISites,
    segments: ISegments,
    price: string,
    image: string,
    date: Date,
    duration: string,
    airlane: string,
    airplane: string,
    class: string
}