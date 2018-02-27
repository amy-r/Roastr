import * as firebase from 'firebase';
import { config } from './firebase-config';
export const firebaseApp = firebase.initializeApp(config);

export const writeUserData = ({userId, userName, userEmail}) => {
  try {
    firebaseApp.database().ref('users/' + userId).set({
      username: userName,
      email: userEmail,
    });
  } catch (error) {
    throw new Error('error storing user')
  }
}

export const addRoasterData = ({userId, name, location, altitude, equipment, water, contact, email}) => {
  try { 
    firebaseApp.database().ref('roasters/' + name).set({
      name,
      altitude,
      location,
      equipment,
      water,
      contact,
      email,
    })
  } catch (error) {
    throw new Error('error adding Roaster')
  }
}

export const addCoffeeData = ({roaster, name, overallScore, region, acidity, body, sweetness, tactile, overallImpression, additionalComments}) => {
  try {
    firebaseApp.database().ref('coffees/' + name).set({
      name,
      roaster,
      overallScore,
      region,
      acidity,
      body,
      sweetness,
      tactile,
      overallImpression,
      additionalComments
    })
  } catch (error) {
    throw new Error('error adding Coffee')
  } 
}

export const convertToArray = (roasters) => {
  if(roasters) {
    return Object.keys(roasters).map( roaster => {
      return {...roasters[roaster]}
    });
  } else {
    return []
  }
}

export const pullRoasters = async (ref) => {
  try {
    const currentValue = await ref.once("value")
    const snapshotValue = await currentValue.val()
    return convertToArray(snapshotValue) 
  } catch (error) {
    throw new Error ('error pulling data')
  }
}
