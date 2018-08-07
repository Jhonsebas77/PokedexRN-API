import request from 'supertest'
import { Routes } from '../src/routes'
import { middleware } from '../src/middlewares'
import Server from '../src'
import bunyan from 'bunyan'
import express from 'express'
import bodyParser from 'body-parser'

describe('Loading server express', () => {
    const app = express()
    const log = bunyan.createLogger({ name: '.:Test Server:.' })
    Object.keys(Routes).forEach((key) => {
        app[Routes[key].verb](Routes[key].uri, Routes[key].action)
    })
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())

    it('It responds to /', () => {
        return request(app).get('/').then((res) => expect(200).toEqual(res.status))
    })

    it('It responds to /flights', () => {
        const data = request(app).get('/flights').then((res) => expect(200).toEqual(res.status))
        return data
    })

    it('It responds to /get-customer to response', async () => {
        return await request(app).get('/flights').then((res) => expect(404).toEqual(res.status))
    })
})