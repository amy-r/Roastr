export const roastersReducer = (state=[], action) => {
  switch (action.type) {
    case 'ADD_ROASTER':
      return[...state, action.roaster]
    default:
      return state  
  }
}
