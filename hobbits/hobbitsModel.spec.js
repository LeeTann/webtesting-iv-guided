const request = require('supertest')

const db = require('../data/dbConfig')
const Hobbits = require('./hobbitsModel')

describe('hobbits model', () => {
    describe('insert()', () => {
        // afterEach with trucate() allows for cleanup after every insert
        afterEach(async () => {
            await db('hobbits').truncate()
        })
      
        it('should insert the provided hobbit into the db', async () => {
            const hobbit = await Hobbits.insert({name: 'gaffer'})

            expect(hobbit.name).toBe('gaffer')
        })

        it('should insert the provided hobbit into the db', async () => {
            await Hobbits.insert({name: 'mikey'})
            await Hobbits.insert({name: 'gaffer'})

            const hobbits = await db('hobbits')
            
            expect(hobbits).toHaveLength(2)
        })
    })
    
})