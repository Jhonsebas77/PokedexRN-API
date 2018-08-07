import { Flight } from '../models/Schema/Flights'
import { Place } from '../models/Schema/Places'
import { log } from 'util'
export const Services = {
    home: async () => {
        return 'Service Home'
    },
    flights: async () => {
        try {
            const data = await Flight.find()
            return data
        } catch (error) {
            return `Error al buscar los Hoteles ${error}`
        }
    },
    flightGo: async (query: any) => {
        try {
            console.log('---')
            console.log(query)
            const { destination, origin, date } = query
            const data = await Flight.find({
                'destination.iata': destination,
                'origin.iata': origin,
                'date': new Date(date)
            })
            return data
        } catch (error) {
            return error
        }
    },
    flightGoBack: async (query: any) => {
        try {
            const { destination, origin, date, returnDate } = query
            const go = await Services.flightGo({
                destination: destination, origin: origin, date: date
            })
            const back = await Services.flightGo({
                destination: origin, origin: destination, date: returnDate
            })
            return { go, back }
        } catch (error) {
            return error
        }
    },

    flightMulti: async (query: any) => {
        try {
            const { multi } = query
            console.log(query)
            let multiFlights: any = {}
            for (let i = 0; i < multi.length; i++) {
                multiFlights[`Fly${i + 1}`] = await Services.flightGo(multi[i])
            }
            return multiFlights
        } catch (error) {
            return error
        }
    },

    saveFlight: async (flight: any) => {
        try {
            const data = await Flight.create(Object.assign({}, flight))
            return data
        } catch (error) {
            return `Error  ${error}`
        }
    },
    places: async () => {
        try {
            const data = await Place.find()
            return data
        } catch (error) {
            return `Error  ${error}`
        }
    },
    savePlace: async (place: any) => {
        try {
            const data = await Place.create(Object.assign({}, place))
            return data
        } catch (error) {
            return `Error  ${error}`
        }
    }

}