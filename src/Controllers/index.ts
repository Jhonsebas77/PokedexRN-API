import { Services } from '../Services'
import { Response, Request } from 'express'
import { log } from 'util'

export const Controller = {
    home: async (req: Request, res: Response) => {
        console.log('Hola home')
        const data = await Services.home()
        res.send(data)
    },
    flights: async (req: Request, res: Response) => {
        console.log('Hola flights')
        const data = await Services.flights()
        res.send(data)
    },
    flightGo: async (req: Request, res: Response) => {
        console.log('Hola flightGo')
        const data = await Services.flightGo(req.query)
        res.send(data)
    },
    flightGoBack: async (req: Request, res: Response) => {
        console.log('Hola flightGoBack')
        const data = await Services.flightGoBack(req.query)
        res.send(data)
    },
    flightMulti: async (req: Request, res: Response) => {
        console.log('Hola flightMulti')
        const data = await Services.flightMulti(req.body)
        res.send(data)
    },
    createFlight: async (req: Request, res: Response) => {
        console.log('Hola createFlight')
        const data = await Services.saveFlight(req.body)
        res.send(data)
    },
    places: async (req: Request, res: Response) => {
        console.log('Hola places')
        const data = await Services.places()
        res.send(data)
    },
    createPlaces: async (req: Request, res: Response) => {
        console.log('Hola createPLaces')
        const data = await Services.savePlace(req.body)
        res.send(data)
    }
}