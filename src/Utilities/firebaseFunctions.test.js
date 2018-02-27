import { writeUserData, addRoasterData, convertToArray, pullRoasters, firebaseApp } from './firebaseFunctions.js';
import * as firebase from 'firebase';
import { config } from './firebase-config';



describe('firebaseFuctions', () => {
  
  // const firebaseApp = firebase.initializeApp(config);

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
    it('should call set with expected params', () => {

    })

    it('should throw an error if unsuccessful', () => {

    firebaseApp.database()= jest.fn();
    // ref('roasters/' + name) = jest.fn().mockImplementation( () => {
    //   throw new Error('error adding Roaster')
    // })

    const errorFunction = addRoasterData();

    expect(addRoasterData()).toThrow('error adding Roaster')
    })
  })

  describe('addCoffeeData', () => {
    it('should call set with expected params', () => {

    })

    it('should throw an error if unsuccessful', () => {

    })
  })

  describe('pullRoasters', () => {
    it('should throw an error if unsuccessful', () => {

    })
  })
})