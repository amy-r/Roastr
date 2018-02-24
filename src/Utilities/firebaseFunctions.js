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

const convertToArray = (roasters) => {
  return Object.keys(roasters).map( roaster => {
    return {...roasters[roaster]}
  });
}

export const pullRoasters = async (ref) => {
  const currentValue = await ref.once("value")
  const snapshotValue = await currentValue.val()
  return convertToArray(snapshotValue)
}
