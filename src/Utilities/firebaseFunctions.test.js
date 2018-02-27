import { writeUserData, addRoasterData, convertToArray, pullRoasters } from './firebaseFunctions.js';
import * as firebase from 'firebase';

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

  describe('addRoasterData', () => {
    it('should throw an error if unsuccessful', () => {

    firebaseApp.database().ref('roasters/' + name).set({
      name,
      altitude,
      location,
      equipment,
      water,
      contact,
      email,
    }) = jest.fn().mockImplementation( () => {
      throw new Error('error adding Roaster')
    })

    const errorFunction = addRoasterData();

    expect(firebaseApp.database().ref('roasters/' + name).set({
      name,
      altitude,
      location,
      equipment,
      water,
      contact,
      email,
    }).toHaveBeenCalled())
    })
  })
})