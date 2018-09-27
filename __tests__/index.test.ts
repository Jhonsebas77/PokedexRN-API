import 'jest'
import request from 'supertest'
import bunyan from 'bunyan'
import express from 'express'
import bodyParser from 'body-parser'
import Server from '../src'

const app = Server.bootstrap().middleware
describe('App express test suite', () => {
    it('It should expecting 200 http status code value when asking health route', async () => {
        return request(app)
            .get('/flights')
            .expect(200)
    })
})