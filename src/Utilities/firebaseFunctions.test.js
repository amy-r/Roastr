import {writeUserData, addRoasterData, convertToArray, pullRoasters } from './firebaseFunctions.js'

describe('firebaseFuctions', () => {

  describe('convertToArray', () => {
    it('should take in a roaster array and return an array', () => {
      const mockRoasters = {
        Corvus: { name: 'Corvus',
          location: 'Denver' },
        Boxcar: { name: 'Boxcar',
          location: 'Boulder' }
      }

      const mockRoastersArray = [
        {"location": "Denver", "name": "Corvus"}, 
        {"location": "Boulder", "name": "Boxcar"} 
      ]
      expect(convertToArray(mockRoasters)).toEqual(mockRoastersArray)

    })
  })
})