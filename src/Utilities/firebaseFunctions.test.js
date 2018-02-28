import { writeUserData, addRoasterData, addCoffeeData, convertToArray, pullRoasters, firebaseApp } from './firebaseFunctions.js';
import * as firebase from 'firebase';
import { config } from './firebase-config';


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
    it('should call set', () => {
      const mockRoaster = {
        Corvus: { 
          name: 'Corvus',
          location: 'Denver',
          altitude: '5280',
          equipment: '',
          water: '',
          contact: '',
          email: '' 
        }
      }

      firebaseApp.database = jest.fn().mockImplementation( (mockRoaster) => {
        return {ref: jest.fn().mockImplementation ( (mockRoaster) => {
          return {set: jest.fn().mockImplementation( (mockRoaster) => {
            return mockRoaster
          })}
        })}
      })

      addRoasterData(mockRoaster)
      expect(firebaseApp.database().ref('roasters/' + mockRoaster.name).set).toHaveBeenCalled;
    })

    it('should throw an error if unsuccessful', () => {
       const mockRoaster = {
              Corvus: { 
                name: 'Corvus',
                location: 'Denver',
                altitude: '5280',
                equipment: '',
                water: '',
                contact: '',
                email: '' 
              }
            }

      firebaseApp.database = jest.fn().mockImplementation( (mockRoaster) => {
        return {ref: jest.fn().mockImplementation ( (mockRoaster) => {
          return {set: jest.fn().mockImplementation( (mockRoaster) => {
            throw new Error('error adding Roaster')
          })}
        })}
      })

      expect(firebaseApp.database().ref('roasters/' + mockRoaster.name).set).toThrow('error adding Roaster')
    })
  })

  describe('addCoffeeData', () => {
    it('should call set', () => {
      const mockCoffee = {
        name:'',
        overallScore: '',
        region: '',
        acidity: '',
        body: '',
        sweetness: '',
        tactile: '',
        overallImpression: '', 
        roaster: '',
        email: '',
        errorState:'',
        additionalComments: ''
      };

      firebaseApp.database = jest.fn().mockImplementation( (mockCoffee) => {
        return {ref: jest.fn().mockImplementation ( (mockCoffee) => {
          return {set: jest.fn().mockImplementation( (mockCoffee) => {
            return mockCoffee
          })}
        })}
      })

      addCoffeeData(mockCoffee)
      expect(firebaseApp.database().ref('coffees/' + mockCoffee.name).set).toHaveBeenCalled;
    })

    it('should throw an error if unsuccessful', () => {
      const mockCoffee = {
        name:'',
        overallScore: '',
        region: '',
        acidity: '',
        body: '',
        sweetness: '',
        tactile: '',
        overallImpression: '', 
        roaster: '',
        email: '',
        errorState:'',
        additionalComments: ''
      };

      firebaseApp.database = jest.fn().mockImplementation( (mockCoffee) => {
        return {ref: jest.fn().mockImplementation ( (mockCoffee) => {
          return {set: jest.fn().mockImplementation( (mockCoffee) => {
            throw new Error('error adding Coffee data')
          })}
        })}
      })

      expect(firebaseApp.database().ref('coffees/' + mockCoffee.name).set).toThrow('error adding Coffee data')
    })
  })

  describe('pullRoasters', () => {
    it('should throw an error if unsuccessful', async () => {
      const ref = {
        once: jest.fn().mockImplementation(() => Promise.reject({
        error: 'some error'
        }))
      }

      const error = new Error('error pulling data')

      await expect(pullRoasters(ref)).rejects.toEqual(error);
    })
  })
})