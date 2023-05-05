const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { User, Deck, Card, Attack } = require('./index')
const {db} = require('../db/config')

let attack;

// clear db and create new user before tests
beforeAll(async () => {
    await db.sync({ force: true })
    attack = await Attack.create({ title: 'attack.test', mojoCost: 123, staminaCost: 23})
  })
  // clear db after tests
  afterAll(async () => await db.sync({ force: true }))
  
  describe('Attack', () => {
    it('has an id', async () => {
      expect(attack).toHaveProperty('id')
    })
    
    it('has correct title', async () => {
        expect(attack.title).toBe('attack.test')
      })
    it('has correct mojoCost', async () => {
        expect(attack.mojoCost).toBe(123)
    })
    it('has correct staminaCost', async () => {
        expect(attack.staminaCost).toBe(23)
    })

})  