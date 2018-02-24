import coffeeReducer from './coffeeReducer'

describe ('coffee reducer', () => {
  it('should return the initial state', () => {
    expect(coffeeReducer(undefined, {})).toEqual([])
  })

  it('should add a coffee to state and return that state when passed an ADD_COFFEE action', () => {
    const action = {
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

    const expectedState = [{
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
    }]

    expect(coffeeReducer(undefined, action)).toEqual(expectedState)
  })
})