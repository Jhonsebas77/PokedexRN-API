import 'jest'
import request from 'supertest'
import bunyan from 'bunyan'
import express from 'express'
import bodyParser from 'body-parser'
describe('App express test suite', () => {
    const app = express()
    const log = bunyan.createLogger({ name: '.:Test Server:.' })
    it('It should expecting 404', async () => {
        return request(app)
            .get('/')
            .expect(404)
    })
})