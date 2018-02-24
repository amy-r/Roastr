import * as actions from '../../src/actions/index'

describe('actions', () => {

  describe('addRoaster', () => {

    it('should create an action to add a roaster', () => {

      const roaster = { 
          userId: "encryptedid",
          name: "Corvus",
          location: "Denver",
          altitude: "5280",
          equipment: "drum",
          water: "calcium",
          contact: "dom",
          email: "dom@corvus.com" }

      const expectedAction = {
        type: 'ADD_ROASTER',
        roaster: { 
          userId: "encryptedid",
          name: "Corvus",
          location: "Denver",
          altitude: "5280",
          equipment: "drum",
          water: "calcium",
          contact: "dom",
          email: "dom@corvus.com" }
      }

      expect(actions.addRoaster(roaster)).toEqual(expectedAction);
    })
  })

  describe('addCoffee', () => {

    it('should create an action to add a coffee', () => {

      const coffee = {
        name: "San Sebastian",
        overallScore: "5",
        region: "Nicaragua",
        acidity: "4",
        body: "5",
        sweetness: "4",
        tactile: "6",
        overallImpression: "Great coffee",
        roaster: "Novo",
        additionalComments: "Please order 60 pounds" 
      }

      const expectedAction = {
        type: 'ADD_COFFEE',
        coffee: {
          name: "San Sebastian",
          overallScore: "5",
          region: "Nicaragua",
          acidity: "4",
          body: "5",
          sweetness: "4",
          tactile: "6",
          overallImpression: "Great coffee",
          roaster: "Novo",
          additionalComments: "Please order 60 pounds" 
        }
      }

      expect(actions.addCoffee(coffee)).toEqual(expectedAction)  
    })
  })

  describe('logIn', () => {

    it('should create an action to log in', () => {

      const user = {
        userName: "Beyoncé Knowles",
        userEmail: "beyonce@gmail.com",
        userPhoto: "beyoncephoto.jpg",
        userId: "encryptedid"
      }

      const expectedAction = {
        type: 'LOG_IN',
        user: {
          userName: "Beyoncé Knowles",
          userEmail: "beyonce@gmail.com",
          userPhoto: "beyoncephoto.jpg",
          userId: "encryptedid"
        }
      }

      expect(actions.logIn(user)).toEqual(expectedAction)
    })
  })

  describe('logOut', () => {

    it ('should create an action to log out', () => {

      const user = {
        userName: "Beyoncé Knowles",
        userEmail: "beyonce@gmail.com",
        userPhoto: "beyoncephoto.jpg",
        userId: "encryptedid"
      }

      const expectedAction = {
        type: 'LOG_OUT',
        user: {
          userName: "Beyoncé Knowles",
          userEmail: "beyonce@gmail.com",
          userPhoto: "beyoncephoto.jpg",
          userId: "encryptedid"
        }
      }

      expect(actions.logOut(user)).toEqual(expectedAction)
    })
  })
})
