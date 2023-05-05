const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { User, Deck, Card, Attack } = require('./index')
const {db} = require('../db/config')

let card;

// clear db and create new user before tests
beforeAll(async () => {
    await db.sync({ force: true })
    card = await Card.create({ name: 'card.test', mojo: 123, stamina: 50, imgUrl: 'testing123.url'})
  })
  // clear db after tests
  afterAll(async () => await db.sync({ force: true }))
  
  describe('Card', () => {
    it('has an id', async () => {
      expect(card).toHaveProperty('id')
    })
    it('has correct name', async () => {
        expect(card.name).toBe('card.test')
      })
    it('has correct mojo', async () => {
        expect(card.mojo).toBe(123)
    })
    it('has correct stamina', async () => {
        expect(card.stamina).toBe(50)
    })
    it('has correct imgUrl', async () => {
        expect(card.imgUrl).toBe('testing123.url')
    })
    

})  