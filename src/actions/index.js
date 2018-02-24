export const addRoaster =  (roaster) => ({
  type: 'ADD_ROASTER',
  roaster
})

export const retrievedRoasters = (roasters) => ({
  type: 'RETRIEVED_ROASTERS',
  roasters
})

export const addCoffee = (coffee) => ({
  type: 'ADD_COFFEE',
  coffee
})

export const logIn = (user) => ({
  type: 'LOG_IN',
  user
})

export const logOut = (user) => ({
  type: 'LOG_OUT',
  user
})
