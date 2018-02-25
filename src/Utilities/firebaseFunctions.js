import * as firebase from 'firebase';
import { config } from './firebase-config';
export const firebaseApp = firebase.initializeApp(config);

export const writeUserData = ({userId, userName, userEmail}) => {
  firebaseApp.database().ref('users/' + userId).set({
    username: userName,
    email: userEmail,
  });
}

export const addRoasterData = ({userId, name, location, altitude, equipment, water, contact, email}) => {
  firebaseApp.database().ref('roasters/' + name).set({
    name,
    altitude,
    location,
    equipment,
    water,
    contact,
    email,
  })
}

export const addCoffeeData = ({roaster, name, overallScore, region, acidity, body, sweetness, tactile, overallImpression, additionalComments}) => {
  firebaseApp.database().ref('coffees/' + name).set({
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
}

export const convertToArray = (roasters) => {
  return Object.keys(roasters).map( roaster => {
    return {...roasters[roaster]}
  });
}


export const pullRoasters = async (ref) => {
  const currentValue = await ref.once("value")
  const snapshotValue = await currentValue.val()
  return convertToArray(snapshotValue)
}
