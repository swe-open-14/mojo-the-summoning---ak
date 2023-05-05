const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { User, Deck, Card, Attack } = require('./index')
const {db} = require('../db/config')

let deck;

// clear db and create new user before tests
beforeAll(async () => {
    await db.sync({ force: true })
    deck = await Deck.create({ name: 'deck.test', xp: 300})
  })
  // clear db after tests
  afterAll(async () => await db.sync({ force: true }))
  
  describe('Deck', () => {
    it('has an id', async () => {
      expect(deck).toHaveProperty('id')
    })
    
    it('has correct username', async () => {
        expect(deck.name).toBe('deck.test')
      })
    it('has correct xp', async () => {
        expect(deck.xp).toBe(300)
    })
    

})  