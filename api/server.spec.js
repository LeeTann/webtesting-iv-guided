const request = require('supertest')

const server = require('./server')

describe('server.js', () => {
    it('should set testing environment', () => {
        expect(process.env.DB_ENV).toBe('testing')
    })

    describe('GET /', () => {
        // Promise base
        it('should return 200 status code', () => {
            return request(server).get('/').then(res => {
                expect(res.status).toBe(200)
            })
        })

        // http status code w/ the homies
        it('should return 200 status code', async () => {
            const res = await request(server).get('/')
            
            expect(res.status).toBe(200)       
        })

        // format of the data (JSON)
        it('should return JSON', async () => {
            const res = await request(server).get('/')
            
            expect(res.type).toBe('application/json')   
        })

        // shape of the response body
        it('should return { api: "up" }', async () => {
            const res = await request(server).get('/')
            
            expect(res.body).toEqual({ api: 'up'})   
        })
        
    })
})



