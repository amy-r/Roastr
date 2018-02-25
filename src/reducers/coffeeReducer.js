const coffeeReducer = (state=[], action) => {
  switch (action.type) {
    case 'ADD_COFFEE' :
      return [...state, action.coffee]
    case 'RETRIEVED_COFFEES' :
      return [...action.coffees]
    default:
      return state
  }
}

export default coffeeReducer;