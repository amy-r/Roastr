import coffeeReducer from './coffeeReducer'

describe ('coffee reducer', () => {
  it('should return the initial state', () => {
    expect(coffeeReducer(undefined, {})).toEqual([])
  })
})