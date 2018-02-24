import reducer from './roastersReducer';

describe ('roasters reducer', () => {
  it('should return the initial state', () => {
    expect( reducer(undefined, {})).toEqual([])
  })
})