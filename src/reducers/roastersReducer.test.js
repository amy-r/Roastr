import roasterReducer from './roastersReducer';

describe ('roasters reducer', () => {
  it('should return the initial state', () => {
    expect(roasterReducer(undefined, {})).toEqual([])
  })

  it('should add a roaster to state, and return that state, when passed an ADD_ROASTER action', () => {
    const action = {
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

    const expectedState = [
      { userId: "encryptedid",
        name: "Corvus",
        location: "Denver",
        altitude: "5280",
        equipment: "drum",
        water: "calcium",
        contact: "dom",
        email: "dom@corvus.com" }
    ]  
    expect(roasterReducer(undefined, action)).toEqual(expectedState)  
  })

})