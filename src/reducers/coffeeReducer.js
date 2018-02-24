const coffeeReducer = (state=[], action) => {
  switch (action.type) {
    case 'ADD_COFFEE' :
      return [...state, action.coffee]
    default:
      return state
  }
}

export default coffeeReducer;