
import 'jest'
import request from 'supertest'
import { Server } from '../src'
const app = Server.bootstrap()
describe('App express test suite', () => {
    it('It should expecting 200 http status code value when asking health route', async () => {
        return request(app)
            .get('/pokedex')
            .expect(200)
    })
})