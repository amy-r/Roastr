import userReducer from './userReducer';

describe('userReducer', () => {

  it('should return the initial state', () => {
    expect(userReducer(undefined, {})).toEqual({})
  })

  it('should return a state with a new user when passed a LOG_IN action', () => {
    const action = {
      type: 'LOG_IN',
      user: {
        userName: "Beyoncé Knowles",
        userEmail: "beyonce@gmail.com",
        userPhoto: "beyoncephoto.jpg",
        userId: "encryptedid"
      }
    }
    
    const expectedState = {
      userName: "Beyoncé Knowles",
      userEmail: "beyonce@gmail.com",
      userPhoto: "beyoncephoto.jpg",
      userId: "encryptedid"
    }

    expect(userReducer(undefined, action)).toEqual(expectedState)
  })

  it('should return an empty state with passed a LOG_OUT action', () => {
    const action = {
      type: 'LOG_OUT',
      user: {
        userName: "Beyoncé Knowles",
        userEmail: "beyonce@gmail.com",
        userPhoto: "beyoncephoto.jpg",
        userId: "encryptedid"
      }
    }

    const initialState = {
      userName: "Beyoncé Knowles",
      userEmail: "beyonce@gmail.com",
      userPhoto: "beyoncephoto.jpg",
      userId: "encryptedid"
    }

    expect(userReducer(initialState, action)).toEqual({})
  })
})