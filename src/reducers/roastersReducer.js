export const roastersReducer = (state=[], action) => {
  switch (action.type) {
    case 'ADD_ROASTER':
      return [...state, action.roaster]
    case 'RETRIEVED_ROASTERS' :
      return [...action.roasters]
    default:
      return state  
  }
}

export default roastersReducer