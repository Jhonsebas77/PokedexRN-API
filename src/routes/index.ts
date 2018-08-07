import { Controller } from '../Controllers'

export const Routes: { [index: string]: any } = {
    Home: {
        verb: 'get',
        uri: '/',
        action: Controller.home
    },
    Flights: {
        verb: 'get',
        uri: '/flights',
        action: Controller.flights
    },
    FlightGo: {
        verb: 'get',
        uri: '/flight',
        action: Controller.flightGo
    },
    FlightGoBack: {
        verb: 'get',
        uri: '/flight-goback',
        action: Controller.flightGoBack
    },
    FlightMulti: {
        verb: 'post',
        uri: '/flight-multi',
        action: Controller.flightMulti
    },
    createFlight: {
        verb: 'post',
        uri: '/flight',
        action: Controller.createFlight
    },
    places: {
        verb: 'get',
        uri: '/places',
        action: Controller.places
    },
    createPlaces: {
        verb: 'post',
        uri: '/places',
        action: Controller.createPlaces
    }
}